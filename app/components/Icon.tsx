import * as Icons from '../assets/icons';

type SvgIconProps = {
    logoName: keyof typeof Icons;
};

const logo = {
    React: '#61DAFB',
    Tailwind: '#06B6D4',
    Node: '#5FA04E'

}


export const SvgIcon = ({ logoName }: SvgIconProps) => {
    const Logo = Icons[logoName];
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-neutral-">
            <Logo className={`w-20 h-20 bg-[${logo[logoName]}]  text-[${logo[logoName]}]`} />
            <h3>{logoName}</h3>
        </div>
    );
};

