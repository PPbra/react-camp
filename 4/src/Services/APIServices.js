
export const fetchTodos = () =>{

    return fetch('http://uetcc-todo-app.herokuapp.com/draft')
        .then(response =>{

            return response.json();
        });
};

export const createTodo = (text) => {

    const url = 'https://uetcc-todo-app.herokuapp.com/draft';

    const request = new Request (url , {

        headers: {
            'Content-Type' : 'application/json'
        },

        method: 'POST' ,

        body: JSON.stringify({
            title: text,

        })

    });

    return fetch(request)
        .then(response  => {

            return response.json();

        })


};

export  const  deleteTodo = (id)=>{


        const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}`;

        const request = new Request(url , {

            method : 'DELETE'
        });

        return fetch(request)
            .then (response=>{

                return response.json();
            });



};


export  const doneTodo = (id)=>{

    let datas = null;
    let isHas = false;

    fetchTodos()
        .then(object => {
        if(object.success) datas = object.data;
    });


    if (datas == null) {
    } else {
        for (let i = 0; i < datas.length; i++) {

            if (id === datas[i]._id) {

                isHas = true;
                break;

            }
        }
    }

    if (isHas){

        const url = `https://uetcc-todo-app.herokuapp.com/draft/${id}/toggle `;

        const request = new Request(url, {

            method: 'POST'
        });

        return fetch(request)
            .then(response => {
                return response.json();
            });

    }


};