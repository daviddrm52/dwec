const ListaBlogs = (props) => {

    const blogs = props.blogs;
    const titulo = props.titulo;
    const handleEliminarBlog = props.handleEliminarBlog;

    

    return ( 
        <div className="content">
            <h1>Pagina de Inicio</h1>
            <h2>{ titulo }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.titulo} </h2>
                    <p><b>Escrito por { blog.autor}</b></p>
                    <p><b>Descripción:</b> {blog.body}</p>
                    <button onClick={() => handleEliminarBlog(blog.id)}>Eliminar blog</button>
                </div>
            ))}
        </div>
     );
}

export default ListaBlogs;