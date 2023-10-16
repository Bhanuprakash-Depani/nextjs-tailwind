'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { ListPoll } from '@/components/ListPoll';

export default function ComponentPage() {
  const [pollList, setPollList] = useState([]);

  useEffect(() => {
    getPoll();
  }, []);

  const getPoll = async () => {
    const response = await fetch('/api/getPoll', { cache: 'no-cache' });
    const { data } = await response.json();
    setPollList(data || []);
  };

  return (
    <main>
      <section>
        <div className={clsx('layout min-h-screen py-6 text-center')}>
          {pollList.length === 0 && (
            <h2 className='text-red-400'>
              No active polls currently. Please visit again!
            </h2>
          )}
          {pollList?.map((poll: any) => (
            <ListPoll key={poll.id} pollData={poll} />
          ))}
        </div>
      </section>
    </main>
  );
}
