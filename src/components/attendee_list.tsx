import {Search} from 'lucide-react'


export function Attendee(){
    return (
        <><div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
                <Search className='size-4 text-emerald-300' />
                <input className="bg-transparent flex-1 outline-none" placeholder="Buscar participantes..." />
            </div>
        </div>
        <table className="w-full border border-white/10 rounded-lg">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Codigo</th>
                        <th>Participante</th>
                        <th>Data de inscrição</th>
                        <th>Data de check-in</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /> 
                        </td>
                        <td>12231321</td>
                        <td>
                            <div>
                                <span>Nome completo</span>
                                <span>email completo</span>
                            </div>
                        </td>
                        <td>7 dias atras</td>
                        <td>3 dias atras</td>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            colSpan={3}
                            Mostrando 10 de 228 itens
                        </td>
                        <td>
                            colSpan={3}
                            Pagina 1 de 23
                        </td>
                    </tr>
                </tfoot>
            </table></>
    )
}