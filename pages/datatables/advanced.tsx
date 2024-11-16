import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '@/components/Icon/IconBell';
import IconStar from '@/components/Icon/IconStar';
import { AppDispatch, IRootState } from '../../store';
import { getAllUsers } from '@/store/slices/usersSlice';
import { ApexOptions } from "apexcharts";
const Basic = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector((state: IRootState) => state.allUsers);

    useEffect(() => {
        dispatch(setPageTitle('Advanced User Table'));
        dispatch(getAllUsers());
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<any[]>([]);
    const [recordsData, setRecordsData] = useState<any[]>([]);

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    });

    useEffect(() => {
        if (users) {
            const sortedData = sortBy(users, sortStatus.columnAccessor);
            setInitialRecords(sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData);
        }
    }, [users, sortStatus]);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        if (initialRecords.length > 0) {
            const from = (page - 1) * pageSize;
            const to = from + pageSize;
            setRecordsData([...initialRecords.slice(from, to)]);
        }
    }, [page, pageSize, initialRecords]);

    const randomColor = () => {
        const color = ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3'];
        return color[Math.floor(Math.random() * color.length)];
    };

    const randomStatusColor = () => {
        const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
        return color[Math.floor(Math.random() * color.length)];
    };

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };



const chart_options = (): ApexOptions => {
  return {
    chart: { sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 }, // This should be fine
    markers: { size: 4, strokeWidth: 0 }, // Correct usage
    colors: [randomColor()], // Ensure randomColor() returns a valid string
    grid: { padding: { top: 5, bottom: 5 } },
    tooltip: {
      x: { show: false },
      y: {
        title: {
          formatter: () => "",
        },
      },
    },
  };
};

 
    const formatDate = (date: string) => {
        if (date) {
            const dt = new Date(date);
            return dt.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
        }
        return '';
    };

    if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
    if (error) return <div className="flex items-center justify-center h-screen text-red-500">Error: {error}</div>;

    return (
        <div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconBell />
                </div>
                <span className="ltr:mr-3 rtl:ml-3">Advanced User Management Table</span>
            </div>
            <div className="panel mt-6">
                <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Users</h5>
                <div className="datatables">
                    {isMounted && (
                        <DataTable
                            noRecordsText="No users found"
                            highlightOnHover
                            className="table-hover whitespace-nowrap"
                            records={recordsData}
                            columns={[
                                {
                                    accessor: 'id',
                                    title: 'ID',
                                    sortable: true,
                                    render: ({ id }) => <strong className="text-info">#{id.slice(0, 8)}</strong>,
                                },
                                {
                                    accessor: 'firstName',
                                    title: 'User',
                                    sortable: true,
                                    render: ({ firstName, lastName, profilePic }) => (
                                        <div className="flex items-center gap-2">
                                            <img 
                                                src={profilePic || `/assets/images/profile-${getRandomNumber(1, 34)}.jpeg`}
                                                className="h-9 w-9 max-w-none rounded-full object-cover" 
                                                alt="user-profile" 
                                            />
                                            <div className="font-semibold">{firstName + ' ' + lastName}</div>
                                        </div>
                                    ),
                                },
                                {
                                    accessor: 'email',
                                    title: 'Email',
                                    sortable: true,
                                    render: ({ email }) => (
                                        <a href={`mailto:${email}`} className="text-primary hover:underline">
                                            {email}
                                        </a>
                                    ),
                                },
                                {
                                    accessor: 'phoneN',
                                    title: 'Phone',
                                    sortable: true,
                                },
                                {
                                    accessor: 'userAddress',
                                    title: 'Location',
                                    render: ({ userAddress }) => (
                                        <div className="flex items-center gap-2">
                                            <div>{userAddress?.city || '-'}</div>
                                        </div>
                                    ),
                                },
                                {
                                    accessor: 'role',
                                    title: 'Role',
                                    render: ({ role }) => (
                                        <span className={`badge badge-outline-${randomStatusColor()}`}>
                                            {role?.toUpperCase()}
                                        </span>
                                    ),
                                },
                                {
                                    accessor: 'lastActivity',
                                    title: 'Activity',
                                    render: ({ id }) => (
                                        <ReactApexChart
                                            key={id}
                                            type="line"
                                            series={[{ data: [21, 9, 36, 12, 44, 25, 59] }]}
                                            options={chart_options()}
                                            height={30}
                                            width={150}
                                        />
                                    ),
                                },
                                {
                                    accessor: 'isActive',
                                    title: 'Status',
                                    render: ({ isActive }) => (
                                        <span className={`badge badge-outline-${isActive ? 'success' : 'danger'}`}>
                                            {isActive ? 'ACTIVE' : 'INACTIVE'}
                                        </span>
                                    ),
                                },
                                {
                                    accessor: 'createdAt',
                                    title: 'Created',
                                    sortable: true,
                                    render: ({ createdAt }) => <div>{formatDate(createdAt)}</div>,
                                },
                            ]}
                            totalRecords={initialRecords.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            recordsPerPageOptions={PAGE_SIZES}
                            onRecordsPerPageChange={setPageSize}
                            sortStatus={sortStatus}
                            onSortStatusChange={setSortStatus}
                            minHeight={200}
                            paginationText={({ from, to, totalRecords }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Basic;