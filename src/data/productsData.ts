import p1_1 from '../assets/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive.jpg';
import p1_2 from '../assets/01.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive/02.Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive.jpg';
import p2_1 from '../assets/02.Rotary Vane Pumps – Double Stage Oil Immersed Direct Drive/01.Rotary Vane Pumps – Double Stage Oil Immersed Direct Drive.jpg';
import p2_2 from '../assets/02.Rotary Vane Pumps – Double Stage Oil Immersed Direct Drive/02.Rotary Vane Pumps – Double Stage Oil Immersed Direct Drive.jpg';
import p3_1 from '../assets/03.Rotary Vane Pumps – Single Stage Oil Lubricated Direct Drive/01.Rotary Vane Pumps – Single Stage Oil Lubricated Direct Drive.jpg';
import p3_2 from '../assets/03.Rotary Vane Pumps – Single Stage Oil Lubricated Direct Drive/02.Rotary Vane Pumps – Single Stage Oil Lubricated Direct Drive.jpg';
import p4_1 from '../assets/04.Mono Block Pumps – Oil Lubricated/01.Mono Block Pumps – Oil Lubricated.jpg';
import p4_2 from '../assets/04.Mono Block Pumps – Oil Lubricated/02.Mono Block Pumps – Oil Lubricated.jpg';
import p4_3 from '../assets/04.Mono Block Pumps – Oil Lubricated/03.Mono Block Pumps – Oil Lubricated.jpg';
import p4_5 from '../assets/04.Mono Block Pumps – Oil Lubricated/05.Mono Block Pumps – Oil Lubricated.jpg';

// Card 5
import p5_1 from '../assets/05.Belt Drive Pumps – Oil Lubricated/01.Belt Drive Pumps – Oil Lubricated.jpg';
import p5_2 from '../assets/05.Belt Drive Pumps – Oil Lubricated/02.Belt Drive Pumps – Oil Lubricated.jpeg';
import p5_3 from '../assets/05.Belt Drive Pumps – Oil Lubricated/03.Belt Drive Pumps – Oil Lubricated.jpg';
import p5_4 from '../assets/05.Belt Drive Pumps – Oil Lubricated/04.Belt Drive Pumps – Oil Lubricated.jpg';
import p5_5 from '../assets/05.Belt Drive Pumps – Oil Lubricated/05.Belt Drive Pumps – Oil Lubricated.jpg';

// Card 6
import p6_1 from '../assets/06.Mono Block Pumps – Oil Free/01.Mono Block Pumps – Oil Free.jpg';

// Card 7
import p7_1 from '../assets/07.Water Ring Pumps – Single Stage Direct Drive/01.Water Ring Pumps – Single Stage Direct Drive.jpg';

// Card 9
import p9_1 from '../assets/09.Water Ring Pumps – Monoblock/01.Water Ring Pumps – Monoblock.jpg';

// Card 10
import p10_1 from '../assets/10.Monoblock Diaphragm Pumps – Oil Free Single Stage/01.Monoblock Diaphragm Pumps – Oil Free Single Stage.jpg';

// Card 11
import p11_1 from '../assets/11.Monoblock Diaphragm Pumps – Oil Free Double Stage/01.Monoblock Diaphragm Pumps – Oil Free Double Stage.jpg';

// Card 12
import p12_1 from '../assets/12.Piston Pumps – Oil Free Single Stage/01.Piston Pumps – Oil Free Single Stage.jpg';

// Card 13
import p13_1 from '../assets/13.Roots Blower/01.Roots Blower.jpg';

// Card 14
import p14_1 from '../assets/14.Milking Machine Accessories/01.Milking Machine Accessories.jpg';
import p14_2 from '../assets/14.Milking Machine Accessories/02..Milking Machine Accessories.jpg';
import p14_3 from '../assets/14.Milking Machine Accessories/03.Milking Machine Accessories.jpg';

// Card 15
import p15_1 from '../assets/vaccum_system.jpeg';

export interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    detailImages?: string[];
}

export const products: Product[] = [
    { 
        id: 1, 
        category: 'Rotary Vane Pumps', 
        name: 'Rotary Vane Pumps – Single Stage Oil Immersed Direct Drive', 
        image: p1_1,
        detailImages: [p1_1, p1_2]
    },
    { 
        id: 2, 
        category: 'Rotary Vane Pumps', 
        name: 'Rotary Vane Pumps – Double Stage Oil Immersed Direct Drive', 
        image: p2_1,
        detailImages: [p2_1, p2_2]
    },
    { 
        id: 3, 
        category: 'Rotary Vane Pumps', 
        name: 'Rotary Vane Pumps – Single Stage Oil Lubricated Direct Drive', 
        image: p3_1,
        detailImages: [p3_1, p3_2]
    },
    { 
        id: 4, 
        category: 'Mono Block & Belt Drive', 
        name: 'Mono Block Pumps – Oil Lubricated', 
        image: p4_1,
        detailImages: [p4_1, p4_2, p4_3, p4_5]
    },
    { 
        id: 5, 
        category: 'Mono Block & Belt Drive', 
        name: 'Belt Drive Pumps – Oil Lubricated', 
        image: p5_1,
        detailImages: [p5_1, p5_2, p5_3, p5_4, p5_5]
    },
    { 
        id: 6, 
        category: 'Mono Block & Belt Drive', 
        name: 'Mono Block Pumps – Oil Free', 
        image: p6_1,
        detailImages: [p6_1]
    },
    { 
        id: 7, 
        category: 'Water Ring Pumps', 
        name: 'Water Ring Pumps – Single Stage Direct Drive', 
        image: p7_1,
        detailImages: [p7_1]
    },
    { 
        id: 8, 
        category: 'Water Ring Pumps', 
        name: 'Water Ring Pumps – Double Stage Direct Drive', 
        image: p2_1 
    },
    { 
        id: 9, 
        category: 'Water Ring Pumps', 
        name: 'Water Ring Pumps – Monoblock', 
        image: p9_1,
        detailImages: [p9_1]
    },
    { 
        id: 10, 
        category: 'Diaphragm & Piston Pumps', 
        name: 'Monoblock Diaphragm Pumps – Oil Free Single Stage', 
        image: p10_1,
        detailImages: [p10_1]
    },
    { 
        id: 11, 
        category: 'Diaphragm & Piston Pumps', 
        name: 'Monoblock Diaphragm Pumps – Oil Free Double Stage', 
        image: p11_1,
        detailImages: [p11_1]
    },
    { 
        id: 12, 
        category: 'Diaphragm & Piston Pumps', 
        name: 'Piston Pumps – Oil Free Single Stage', 
        image: p12_1,
        detailImages: [p12_1]
    },
    { 
        id: 13, 
        category: 'Accessories', 
        name: 'Roots Blower', 
        image: p13_1,
        detailImages: [p13_1]
    },
    { 
        id: 14, 
        category: 'Accessories', 
        name: 'Milking Machine Accessories', 
        image: p14_1,
        detailImages: [p14_1, p14_2, p14_3]
    },
    { 
        id: 15, 
        category: 'Special Systems', 
        name: 'Vacuum Systems - Roots Blower And Chamber Attached', 
        image: p15_1 
    },
];
