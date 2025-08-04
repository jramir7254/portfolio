function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

function calculateRatio(width: number, height: number): string {
    const divisor = gcd(width, height);
    const w = width / divisor;
    const h = height / divisor;
    return `${w}:${h}`;
}

// Example
console.log(calculateRatio(1920, 1080)); // "16:9"
console.log(calculateRatio(360, 480));   // "3:4"