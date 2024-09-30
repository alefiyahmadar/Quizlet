import { v4 as uuid } from "uuid";


export const Flashcards = [
    {
        user:"Dwayne Yu",
        subject:"Biology",
        
        cards:[ 
            {
            id:uuid(),
            quest:"What is called powerhouse of cell?",
            ans:"Mitochondria"
        },
    {
        id:uuid(),
        quest:"The process of plants to generate their food?",
        ans:"Photosynthesis"
    },{
        id:uuid(),
        quest:"A passive movement of particles from high to low concentration through a protein channel in a cell.?",
        ans:"Facilitated Diffusion"
    }]
       


},{
    user:"Shanoy Kaul",
                
                cards:[ 
                    {
                    id:uuid(),
                    quest:"substance that CANNOT be chemically broken down into simpler substances",
                    ans:"element"
                },
            {
                id:uuid(),
                quest:"smallest part of an element that can be identified as that element",
                ans:"atom"
            },{
                id:uuid(),
                quest:"center, or core, of an atom (where the protons and neutrons are located)",
                ans:"nucleus"
            }]
}
]