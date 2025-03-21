import { useEffect, useState } from 'react';
import DiaryCard from '@/components/level-2/DiaryCard';
import useTableStore from '@/store/DiaryData';
import { tm } from '@/utils/tw-merge';

function PublicDiary() {
  const { fetchPublicDiaries, publicDiaries, loading, error, currentUserId } =
    useTableStore();
  const [filteredDiaries, setFilteredDiaries] = useState([]);

  useEffect(() => {
    fetchPublicDiaries(); // 공개된 다이어리 불러오기
  }, [fetchPublicDiaries]);

  useEffect(() => {
    if (currentUserId) {
      setFilteredDiaries(
        publicDiaries.filter((diary) => diary.user_id !== currentUserId)
      );
    }
  }, [publicDiaries, currentUserId]);

  if (loading.publicDiaries)
    return <p className="text-center">공개된 다이어리를 불러오는 중...</p>;
  if (error.publicDiaries)
    return <p className="text-center">에러: {error.publicDiaries}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full lg:pl-35 overflow-x-hidden">
      {filteredDiaries.length > 0 ? (
        <div
          className={tm(
            'grid w-full gap-3 auto-rows-fr max-w-screen justify-items-center',
            'grid-cols-1',
            'sm:grid-cols-1',
            'md:grid-cols-2',
            '[@media_(min-width:1280px)]:grid-cols-3',
            '[@media_(min-width:1650px)]:grid-cols-4'
          )}
        >
          {filteredDiaries.map((diary) => (
            <DiaryCard key={diary.diary_id} diary={diary} />
          ))}
        </div>
      ) : (
        <p className="text-center">아직 공개된 다이어리가 없습니다.</p>
      )}
    </div>
  );
}

export default PublicDiary;
