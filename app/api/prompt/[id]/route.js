import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


// GET(read)

export const GET=async(request, {params})=>{

    try {
        await connectToDB();
        const prompt= await Prompt.findById(params.id).populate('creator');

        if(!prompt) return new Response("Prompt not found", {status:404});
        
        return new Response(JSON.stringify(prompts),{status:200})
        
    } catch (error) {
        return new Response("failed to fetch all prompts",{status:500})
        
    }
}

// PATCH(update)
export const PATCH=async(request,{params})=>{
    const {prompt , tag} = await request.JSON();
    
    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) return new Response("Prompt not found", {status:404});

        existingPrompt.prompt=prompt;
        existingPrompt.tag=tag;
        return new Response(JSON.stringify(existingPrompt),{status:200})
    } catch (error) {
        return new Response("failed to update prompt",{status:500})

    }
    
}


// DELETE 
export const DELETE = async(reques, {params})=>{
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt Deleted",{status:200})
    } catch (error) {
            return new Response("failed to delete prompt",{status:500})

    }
}


