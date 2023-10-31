import React from 'react'
import { CELL_STYLE, COLUMNS, ROW_STYLE, TABLE_HEAD_STYLE } from './contants'
import { MdDelete } from 'react-icons/md'

export default function SavedLayouts() {
    return (
        <div className='flex flex-col w-[1500px] gap-5'>
            <h1 className='text-left'>Saved Layouts</h1>
            <table class="table-auto w-[80%] text-left">
                <thead className={TABLE_HEAD_STYLE}>
                    <tr>
                        {COLUMNS.map((column) => {
                            return (
                                <th className='p-2'>{column}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr className={ROW_STYLE}>
                        <td className={CELL_STYLE}>18 x 24, 3 x 4 with 28 parts</td>
                        <td className={CELL_STYLE}>My first layout</td>
                        <td className={CELL_STYLE}>10/31/2023 3:21:17 PM</td>
                        <td className={CELL_STYLE}><MdDelete className='text-[#2c67ae] text-xl cursor-pointer' /></td>
                    </tr>
                    <tr className={ROW_STYLE}>
                        <td className={CELL_STYLE}>18 x 24, 3 x 4 with 28 parts</td>
                        <td className={CELL_STYLE}>My first layout</td>
                        <td className={CELL_STYLE}>	10/31/2023 3:21:17 PM</td>
                        <td className={CELL_STYLE}><MdDelete className='text-[#2c67ae] text-xl cursor-pointer' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
