'use client'

import {useEffect, useState} from 'react'
import type {Todo} from '@prisma/client'
import { toggleTodo,deleteTodo,renameTodo } from './actions'



export default function TodoRow({ t }:{ t: Todo }){
    const [editing,setEditing] = useState(false)

    useEffect(() =>{
        setEditing(false)

    },[t.title])

    if(!editing){
        return(
            <li className ="flex items-center gap-2 border rounded px-3 py-2">
                <form action ={toggleTodo.bind(null, t.id,!t.done)}>
                    <button className="w-5 h-5 border rounded text-xs">{t.done ?'✓' : ''}</button>
                </form>

                <span className={`flex-1 ${t.done? 'line-through text-gray-300':'' } `}>{t.title}</span>

                <button type="button" className = "text-blue-600" onClick={() => setEditing(true)}>Edit</button>

                <form action={deleteTodo.bind(null,t.id)}>
                    <button className = "text-red-600 ml-3">Delete</button>
                </form>

                </li>
        )
    }
    return(
        <li className = "flex items-center gap-2 border rounded px-3 py-2">
            <form action= {renameTodo.bind(null,t.id)} className="flex items-center gap-2 flex-1">
            <input name="title"
                   defaultValue={t.title}
                   className ="border rounded px-2 py-1 flex-1"
                   autoFocus
            ></input>
            <button className="px-2 py-1 rounded bg-black text-white" type="submit">Save</button>
            </form>

            <button type= "button" className="px-2 py-1" onClick={() => setEditing(false)}> Cancel</button>
        </li>

    )

}
