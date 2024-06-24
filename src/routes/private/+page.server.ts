import type { Car } from '$lib'
export const load = async({locals:{supabase,session}})=>{
    const user = session?.user
    const {data,error}= await supabase
    .from('cars')
    .select('*')
    .eq('user_id',user?.id)
    .order('brand',{ascending:true})
    if(error){
        console.error(error)
    }
return{
    cars:data
}as {
    cars:Car[]
}
}

export const actions={
    signOut:async({locals:{session,supabase}})=>{
        if (session) {
            await supabase.auth.signOut()
        }
    },
    addCars:async({locals:{session,supabase},request})=>{
        const {model,brand,referenceNumber} = Object.fromEntries(await request.formData())
        const user = session?.user
        const {error} = await supabase
        .from('cars')
        .insert([{
            model,
            brand,
            refrence_number:referenceNumber,
            user_id:user?.id
        }])
        if (error) {
            console.error(error)
            return {error,message:'failure',type:'addition'}
        }else{
            return{message:'success',type:'addition'}
        }
    },
    deleteCar:async({request,locals:{supabase,session}})=>{
        const formdata = await request.formData()
        const carId = Number(formdata.get('id')) 
        console.log(carId)
        const user = session?.user
        const {error} = await supabase
        .from('cars')
        .delete()
        .match({id:carId,user_id:user?.id})
        if (error) {
            console.error(error)
            return {error,message:'failure',type:'deletion'}
        }else{
            return{message:'success',type:'deletion'}
        }
    },
    editCar:async ({locals:{session,supabase},request})=>{
        const {model,brand,referenceNumber,id} = Object.fromEntries(await request.formData())
        const user = session?.user
        const {error} = await supabase
        .from('cars')
        .update({
            model,
            brand,
            refrence_number:referenceNumber
        })
        .match({id,user_id:user?.id})
        if (error) {
            console.error(error)
            return {error,message:'failure',type:'edit'}
        }else{
            return{message:'success',type:'edit'}
        }
    }
    
}
