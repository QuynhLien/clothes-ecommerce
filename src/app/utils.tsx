export function formatNumber(number: number): string {
    return number.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4,
        useGrouping: true,
    });
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getPercentSale(price: number, oldPrice: number): number {
    const percentSale = Math.floor(100 - (100 / oldPrice) * price);
    return percentSale > 100 ? 100 : percentSale < 0 ? 0 : percentSale;
}
