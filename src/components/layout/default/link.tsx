import DiscordIcon from '~/svg/discord.svg';
import MediumIcon from '~/svg/medium.svg';
import TelegramIcon from '~/svg/telegram.svg';
import TwitterIcon from '~/svg/twitter.svg';

export const Link = (): JSX.Element => {
  return (
    <div className='flex gap-2 items-center justify-between px-4 py-2'>
      <MediumIcon className="w-8 h-8" />
      <TwitterIcon className="w-8 h-8" />
      <DiscordIcon className="w-8 h-8" />
      <TelegramIcon className="w-8 h-8" />
    </div>
  );
};
