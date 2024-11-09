import { v4 as uuid } from "uuid";

export const UserArr = [
    {
        user: "Adarsh Balika",
        cards: [
            
            {
                id: uuid(),
                subject: "Biology",
                quest: "What is called powerhouse of cell?",
                ans: "Mitochondria"
            },
            {
                id: uuid(),
                subject: "Biology",
                quest: "The process of plants to generate their food?",
                ans: "Photosynthesis"
            },
            {
                id: uuid(),
                subject: "Biology",
                quest: "A passive movement of particles from high to low concentration through a protein channel in a cell.",
                ans: "Facilitated Diffusion"
            }
        ]
    },
    {
        user: "Shanoy Kaul",
        cards: [
            {
                id: uuid(),
                subject: "Chemistry",
                quest: "Substance that CANNOT be chemically broken down into simpler substances",
                ans: "element"
            },
            {
                id: uuid(),
                subject: "Chemistry",
                quest: "Smallest part of an element that can be identified as that element",
                ans: "atom"
            },
            {
                id: uuid(),
                subject: "Chemistry",
                quest: "Center, or core, of an atom (where the protons and neutrons are located)",
                ans: "nucleus"
            }
        ]
    },
    {
        user: "Het Groover",
        cards: [
            {
                id: uuid(),
                subject: "Social Science",
                quest: "Who is the father of sociology?",
                ans: "Auguste Comte"
            },
            {
                id: uuid(),
                subject: "Social Science",
                quest: "What is the political ideology that advocates for common ownership of production?",
                ans: "Communism"
            },
            {
                id: uuid(),
                subject: "Social Science",
                quest: "Who proposed the theory of the division of labor?",
                ans: "Émile Durkheim"
            }
        ]
    }
];
