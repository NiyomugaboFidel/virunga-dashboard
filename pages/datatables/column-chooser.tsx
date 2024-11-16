import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '@/components/Icon/IconBell';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import { getAllUsers } from '@/store/slices/usersSlice';

const ColumnChooser = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector((state: IRootState) => state.allUsers);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<any[]>([]);
    const [recordsData, setRecordsData] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const [hideCols, setHideCols] = useState<string[]>(['role', 'provider', 'refreshToken']);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(setPageTitle('User Management Table'));
    }, [dispatch]);

    useEffect(() => {
        if (users) {
            const sortedData = sortBy(users, sortStatus.columnAccessor);
            setInitialRecords(sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData);
        }
    }, [users, sortStatus]);

    const formatDate = (date: string) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    const showHideColumns = (col: string) => {
        if (hideCols.includes(col)) {
            setHideCols(hideCols.filter((d) => d !== col));
        } else {
            setHideCols([...hideCols, col]);
        }
    };

    const cols = [
        { accessor: 'id', title: 'ID' },
        { accessor: 'firstName', title: 'First Name' },
        { accessor: 'lastName', title: 'Last Name' },
        { accessor: 'email', title: 'Email' },
        { accessor: 'phoneN', title: 'Phone' },
        { accessor: 'role', title: 'Role' },
        { accessor: 'gender', title: 'Gender' },
        { accessor: 'isActive', title: 'Status' },
        { accessor: 'createdAt', title: 'Created Date' },
        { accessor: 'userAddress.city', title: 'City' },
    ];

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
    useEffect(() => {
        if (users) {
            const filteredRecords = users.filter((item: any) => {
                // Add checks to ensure the value is not null or undefined before calling toLowerCase()
                return (
                    (item.id && item.id.toString().toLowerCase().includes(search.toLowerCase())) ||
                    (item.firstName && item.firstName.toLowerCase().includes(search.toLowerCase())) ||
                    (item.lastName && item.lastName.toLowerCase().includes(search.toLowerCase())) ||
                    (item.email && item.email.toLowerCase().includes(search.toLowerCase())) ||
                    (item.phoneN && item.phoneN.toLowerCase().includes(search.toLowerCase())) ||
                    (item.role && item.role.toLowerCase().includes(search.toLowerCase()))
                );
            });
            setInitialRecords(filteredRecords);
        }
    }, [search, users]);

    if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
    if (error) return <div className="flex h-screen items-center justify-center text-red-500">Error: {error}</div>;

    return (
        <div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconBell />
                </div>
                <span className="ltr:mr-3 rtl:ml-3">User Management Table</span>
            </div>
            <div className="panel mt-6">
                <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                    <h5 className="text-lg font-semibold dark:text-white-light">Show/Hide Columns</h5>
                    <div className="flex items-center gap-5 ltr:ml-auto rtl:mr-auto">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center">
                            <div className="dropdown">
                                <Dropdown
                                    placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                    btnClassName="!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark"
                                    button={
                                        <>
                                            <span className="ltr:mr-1 rtl:ml-1">Columns</span>
                                            <IconCaretDown className="h-5 w-5" />
                                        </>
                                    }
                                >
                                    <ul className="!min-w-[140px]">
                                        {cols.map((col, i) => (
                                            <li
                                                key={i}
                                                className="flex flex-col"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                            >
                                                <div className="flex items-center px-4 py-1">
                                                    <label className="mb-0 cursor-pointer">
                                                        <input type="checkbox" checked={!hideCols.includes(col.accessor)} className="form-checkbox" onChange={() => showHideColumns(col.accessor)} />
                                                        <span className="ltr:ml-2 rtl:mr-2">{col.title}</span>
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="text-right">
                            <input type="text" className="form-input" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="datatables">
                    <DataTable
                        className="table-hover whitespace-nowrap"
                        records={recordsData}
                        columns={[
                            { accessor: 'id', title: 'ID', sortable: true, hidden: hideCols.includes('id') },
                            { accessor: 'firstName', title: 'First Name', sortable: true, hidden: hideCols.includes('firstName') },
                            { accessor: 'lastName', title: 'Last Name', sortable: true, hidden: hideCols.includes('lastName') },
                            { accessor: 'email', title: 'Email', sortable: true, hidden: hideCols.includes('email') },
                            { accessor: 'phoneN', title: 'Phone', sortable: true, hidden: hideCols.includes('phoneN') },
                            { accessor: 'role', title: 'Role', sortable: true, hidden: hideCols.includes('role') },
                            { accessor: 'gender', title: 'Gender', sortable: true, hidden: hideCols.includes('gender') },
                            {
                                accessor: 'isActive',
                                title: 'Status',
                                sortable: true,
                                hidden: hideCols.includes('isActive'),
                                render: ({ isActive }) => <div className={`${isActive ? 'text-success' : 'text-danger'} capitalize`}>{isActive ? 'Active' : 'Inactive'}</div>,
                            },
                            {
                                accessor: 'createdAt',
                                title: 'Created Date',
                                sortable: true,
                                hidden: hideCols.includes('createdAt'),
                                render: ({ createdAt }) => <div>{formatDate(createdAt)}</div>,
                            },
                            {
                                accessor: 'userAddress.city',
                                title: 'City',
                                sortable: true,
                                hidden: hideCols.includes('userAddress.city'),
                                render: ({ userAddress }) => <div>{userAddress?.city || '-'}</div>,
                            },
                        ]}
                        highlightOnHover
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
                </div>
            </div>
        </div>
    );
};

export default ColumnChooser;
