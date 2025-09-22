'use server'
import { prisma } from '@/lib/prisma'
import { revalidatePath} from "next/cache";

export async function addTodo(formData: FormData){

    const title = (formData.get('title') as string)?.trim()
    if (!title) return
    await prisma.todo.create({data:{ title } })
    revalidatePath('/')

}

export async function toggleTodo(id: string, done:boolean){
    await prisma.todo.update({where:{id}, data:{ done}})
    revalidatePath('/')
}

export async function deleteTodo(id:string){
    await prisma.todo.delete({where:{id}})
    revalidatePath('/')
}

export async function renameTodo(id:string, formData:FormData){
    const title = (formData.get('title') as string | null)?.trim()??''
    if (!title) return
    await prisma.todo.update({where:{id},data:{title}})
    revalidatePath('/')
}