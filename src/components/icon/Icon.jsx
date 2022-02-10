<<<<<<< HEAD
function Icon ({ iconName, size, link  }) {
    return(
        <a href={link} target="_blank">
            <img src={`/icons/${ iconName }.svg`}  width={size} />
        </a>
    )
}

Icon.defaultProps = {
    size: '30px'
}

=======
function Icon ({ iconName, size, link  }) {
    return(
        <a href={link} target="_blank">
            <img src={`/icons/${ iconName }.svg`}  width={size} />
        </a>
    )
}

Icon.defaultProps = {
    size: '30px'
}

>>>>>>> 4cbb130b0552613fb51d0139b295f4773abae726
export default Icon