
export default function ({component: Component, children, ...rest }) {
    return <div className="page-layout">
        <Component { ...rest} />
        {children}
    </div>
}
