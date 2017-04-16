export default class Point {
    readonly x: number;
    readonly z: number;

    constructor(x: number, z: number) {
        this.x = x;
        this.z = z;
    }

    offset(x: number, z: number): Point {
        return new Point(this.x + x, this.z + z);
    }

    floor(): Point {
        return new Point(Math.floor(this.x), Math.floor(this.z));
    }

    distance(p1: Point): number {
        return Math.sqrt(Math.pow(p1.x - this.x, 2) + Math.pow(p1.z - this.z, 2));
    }
}
