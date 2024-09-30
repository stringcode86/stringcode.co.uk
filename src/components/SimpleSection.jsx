import './SimpleSection.css'

const SimpleSection = ({id, title, body}) => {
    return <section id={id} className={'SimpleSection'}>
        <h1>{title}</h1>
        <p>{body}</p>
    </section>
}

export default SimpleSection;