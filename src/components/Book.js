import React, { Component } from "react";

class Book extends Component {
    render() {
        var handler  =   this.props.handler;
        const { id, name, description, pages } = this.props.book;
        const bk = { id, name, description, pages }
        return (
            <tr >
                <td style={{ width: "50px", textAlign: "center" }}>{id}</td>
                <td>{name}</td>
                <td style={{ width: "200px" }}>{description}</td>
                <td style={{ width: "50px" }}>{pages}</td>
                <td style={{ width: "100px" }} >
                    <button onClick={()=>handler(bk)}> {/* handler je f-ja od booklista (roditelja) */}
                        Borrow
                    </button>
                </td>
            </tr>
        );
    }
}

export default Book;