const url = '/icons/sprite.svg';

const Icon = (props) => (
    <svg className={`${props.name} icon icon-${props.icon}`}>
        <use xlinkHref={`${url}#icon-${props.icon}`} />
    </svg>
);

export default Icon;