import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../../AuthProvider';
import UseAxiosSecure from '../../../Routes/UseAxiosSecure';


const PaymentsHistory = () => {

    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/issues`)
            return res.data
        }
    })

    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Payment History: ({payments.length})</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra p-5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Trx.Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment,index) => <tr key={payment._id}>
                            <th>{index +1}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentsHistory;