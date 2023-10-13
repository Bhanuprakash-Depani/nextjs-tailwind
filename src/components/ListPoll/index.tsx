'use client';

import Image from 'next/image';
import { Fragment, useCallback } from 'react';

import Button from '@/components/buttons/Button';

export const ListPoll = ({ pollData }) => {
  const onVoteHandler = useCallback(() => {
    postVote();
  }, []);

  const postVote = () => {
    // TODO: Vote handler
  };

  // const getGrids = (options: any) => (
  //   <div className='flex w-1/3 min-w-fit flex-col items-center gap-y-1 rounded border border-purple-900 p-2 sm:w-1/4 sm:gap-y-3 sm:p-3'>
  //     <Image
  //       className='mx-auto h-24 w-24 rounded-full md:h-32 md:w-32'
  //       src={options?.media?.url}
  //       alt={options.value}
  //       width='384'
  //       height='512'
  //     ></Image>
  //     <figcaption className='flex flex-wrap font-medium'>
  //       {options.value}
  //     </figcaption>
  //     <Button
  //       variant='primary'
  //       className='border border-purple-700 bg-purple-600'
  //       onClick={onVoteHandler}
  //     >
  //       Vote
  //     </Button>
  //   </div>
  // );

  const getList = (options: any) => (
    <li className='flex items-center justify-between gap-x-6 py-3'>
      <div className='flex min-w-0 gap-x-4'>
        <Image
          className='h-16 w-16 flex-none rounded-full bg-gray-50'
          src={options?.media?.url}
          alt={options?.value}
          width='384'
          height='512'
        />
        <div className='min-w-0 flex-auto'>
          <p className='text-sm font-semibold leading-6 text-gray-900'>
            {options.value}
          </p>
          {Boolean(options.description) && (
            <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
              {options.description}
            </p>
          )}
        </div>
      </div>
      <div className='shrink-0 sm:flex sm:flex-col sm:items-end'>
        <Button
          variant='primary'
          className='!py-1 px-3 !text-sm'
          onClick={onVoteHandler}
        >
          Vote
        </Button>
      </div>
    </li>
  );

  return (
    <div className='mx-auto max-w-xl text-center'>
      <h2 className='my-6'>{pollData?.title}</h2>
      <p className='my-2'>{pollData?.poll_meta?.description}</p>
      <p className='text-md my-2 font-semibold'>
        Total Votes: {pollData?.poll_meta?.vote_count || 0}
      </p>
      {/* <div className='flex flex-row flex-wrap items-stretch justify-center gap-3 sm:gap-6'> */}
      <ul role='list' className='divide-y divide-gray-100'>
        {pollData?.poll_options?.map((options: any) => (
          <Fragment key={options.id}>{getList(options)}</Fragment>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
};
