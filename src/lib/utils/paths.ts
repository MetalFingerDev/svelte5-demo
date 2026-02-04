// Utilities for handling link paths with strict typing

/** Returns true when the link looks like an external URL (scheme://... or protocol:...) */
export function isExternalLink(path: string): boolean {
	if (!path) return false;
	// protocol:// or mailto:, tel:, etc.
	if (/^[a-zA-Z][a-zA-Z+\-.]*:/.test(path)) return true;
	// protocol-less absolute URLs (//host/path)
	if (path.startsWith('//')) return true;
	return false;
}

/** Type guard for internal absolute paths starting with `/` */
export function isInternalPath(path: string): path is `/${string}` {
	return typeof path === 'string' && path.startsWith('/');
}

/**
 * Casts a validated internal path into the narrow literal type expected by `resolve()`.
 * Throws if the value is not an internal path.
 */
export function asResolveArg(path: string): '/' {
	if (!isInternalPath(path)) {
		throw new Error(`asResolveArg: path must start with '/': received '${path}'`);
	}
	return path as unknown as '/';
}

/**
 * Normalize a non-external path into an absolute path suitable for `resolve()`.
 * - For paths that already start with `/` it returns the same value
 * - For relative paths it prefixes `/`
 * - For external URLs it throws
 */
export function normalizeForResolve(path: string): '/' {
	if (isExternalLink(path)) {
		throw new Error(`normalizeForResolve: external URL cannot be resolved: '${path}'`);
	}
	const normalized = path.startsWith('/') ? path : '/' + path;
	return asResolveArg(normalized);
}
