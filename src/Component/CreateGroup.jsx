

const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },

];

const CreateGroup = () => {

    const handleEdit = (item) => {
        console.log(item);

    }
    return (
        <div className="mx-auto w-[80%] my-5 p-6  ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Font Groups</h2>
            <p className="text-sm text-gray-500 mb-4">List of all available font groups</p>
            <table className="min-w-full bg-white border my-2 border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                    <tr className="text-left grid grid-cols-12">
                        <th className="py-3 px-4 col-span-3 border-b">Name</th>
                        <th className="py-3 px-4 col-span-5 border-b">Fonts</th>
                        <th className="py-3 px-4 col-span-2 border-b">Count</th>
                        <th className="py-3 px-4 col-span-2 border-b"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-zinc-50  grid grid-cols-12">
                            <td className="py-3 px-4 col-span-3  border-b">{item.name}</td>
                            <td className="py-3 px-4 col-span-5  border-b text-gray-400">
                                Example Style
                            </td>
                            <td className="py-3 px-4 col-span-2  border-b">{index + 1}</td>
                            <td className="flex items-center justify-center  col-span-2  border-b p-3 gap-2 text-left">
                                <button
                                    onClick={() => { handleEdit(item) }}
                                    className="text-blue-600"
                                >
                                    Edit
                                </button>
                                <button className="text-red-600" >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>





        </div>
    )
}


export default CreateGroup