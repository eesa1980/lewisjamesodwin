import random from "canvas-sketch-util/random";
import {pallete} from "../constant";

export class ItemsProcessor {
    constructor(amount) {
        this.points = [];
        this.items = [];
        this.amount = amount;
        this.count = Math.pow(amount, 1 / 3);
        this.setPoints().setItems();

    }

    getPoints() {
        return this.points;
    }

    getItems() {
        return this.items;
    }

    setPoints() {
        for (let x = 0; x < this.count; x++) {
            if (this.points.length >= this.amount) {
                break;
            }
            for (let y = 0; y < this.count; y++) {
                for (let z = 0; z < this.count; z++) {
                    const u = this.count <= 1 ? 0.5 : x / (this.count - 1);
                    const v = this.count <= 1 ? 0.5 : y / (this.count - 1);
                    const w = this.count <= 1 ? 0.5 : z / (this.count - 1);
                    this.points.push([u, v, w]);
                }
            }
        }

        return this;
    }

    setItems() {
        this.items = this.points.map(([u, v, w], key) => {
            const s = random.range(0.01, 0.05)

            return ({
                key,
                position: [
                    random.noise3D(u * 2, v, w, 2, 4),
                    random.noise3D(u, v * 2, w, 2, 4),
                    random.noise3D(u, v, w * 2, 2, 4)
                ],
                color: random.pick(pallete.slice(0, 4)),
                active: false,
                scale: [s, s, s],
                rotation: [0, 0, 0]
            })
        });

        return this;

    }


}
