import { tm } from '@/utils/tw-merge';

interface LikeToggleProps {
  isToggled: boolean;
  onToggle: (state: boolean) => void;
}

function LikeToggle({ isToggled, onToggle }: LikeToggleProps) {
  const handleToggle = () => {
    onToggle(!isToggled);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isToggled ? '좋아요 취소' : '좋아요'}
      className="cursor-pointer"
    >
      <svg
        role="img"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isToggled ? 'var(--icon-red)' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
        className={tm('transition-colors duration-50 ease-in')}
      >
        <path
          d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z"
          stroke={isToggled ? 'var(--icon-red)' : 'black'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={tm('transition-colors duration-130 ease-out')}
        />
      </svg>
    </button>
  );
}

export default LikeToggle;
