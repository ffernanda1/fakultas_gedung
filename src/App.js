import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Typography } from "@material-tailwind/react";
import Gedung from './component/gedung';

const App = () => {
    const [data, setData] = useState([])
    const TABLE_HEAD = ["id", "id Fakultas", "Nama Resmi", "Nama Singkat", "Nama Asing", ""];
    const fetchPosts = async () => {
        await axios.get('https://api.codefm.my.id/fakultas/'
        ).then(function (response) {
            setData(response.data)

        })
    }

    useEffect(() => {
        fetchPosts()

    }, [])

    return (

        <Card className=" box-border p-4 border-4 overflow-scroll">
            <table className="align-center w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-red-500 bg-red-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => {
                        const isLast = index === data.length - 1;
                        const classes = isLast ? "p-1" : "p-4 border-b border-blue-50";

                        return (
                            <tr key={index} className="even:bg-blue-100/50">
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray" 
                                        className="font-normal"
                                    >
                                        {data.id}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {data.id_fakultas}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {data.nama_resmi}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {data.nama_singkat}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {data.nama_asing}
                                    </Typography>
                                </td>

                                <td className={classes}>
                                    <Gedung datas={data.id} />
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>

    );
}

export default App;