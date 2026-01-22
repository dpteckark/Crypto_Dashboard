import swc from '@swc/core';

try {
    console.log('SWC Version:', swc.version);
    console.log('SWC Loaded Successfully');
} catch (e) {
    console.error('Failed to load SWC:', e);
    process.exit(1);
}
