const ListaBlogs = ({blogs}) => {
    return ( 
        <div className="content">
            <h1>Pagina de Inicio</h1>
            <h2>¡Bienvenido!</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.titulo} </h2>
                    <p><b>Escrito por { blog.autor}</b></p>
                    <p><b>Descripción:</b> {blog.body}</p>
                </div>
            ))}
        </div>
     );
}

export default ListaBlogs;