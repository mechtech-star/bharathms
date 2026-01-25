import React from 'react';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number | string;
}

const Avatar: React.FC<AvatarProps> = ({ size = 40, src, alt = 'Avatar', className = '', ...rest }) => {
  const s = typeof size === 'number' ? `${size}px` : size;
  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden bg-muted/30 ring-2 ring-transparent ${className}`}
      style={{ width: s, height: s }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="object-cover w-full h-full" {...rest} />
      ) : (
        <div className="text-sm text-muted-foreground">{alt?.charAt(0)}</div>
      )}
    </div>
  );
};

export default Avatar;
