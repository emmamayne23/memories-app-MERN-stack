import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <div className='bg-white w-full max-w-xs mx-auto p-3 px-6 shadow mt-2 shadow-black rounded-md text-black text-xs'>
        <Stack >
            <Pagination count={5} variant="outlined" color="primary" />
        </Stack>
    </div>
  );
}