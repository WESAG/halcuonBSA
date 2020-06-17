const url = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()
function task1() {
    xhr.responseType = 'json'
    xhr.open('GET', url, 1)
    xhr.onload = () => {
    console.log(xhr.response)
    }
    xhr.onerror = () => {
    console.error(xh.response)
    }
    xhr.send()
}
function task2() {
    const body = { title: 'foo', body: 'bar', userId: 1 }
    xhr.open('POST', url, )
    xhr.onload = () => {
    console.log(xhr.response)
    }
    xhr.onerror = () => {
    console.error(xhr.response)
    }
    xhr.send(JSON.stringify(body))
} 