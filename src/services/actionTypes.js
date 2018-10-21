export const FETCH_POST = {
    type: 'FETCH_POST'
}
export const FETCH_POST_ERROR = {
    type: 'FETCH_POST_ERROR',
    error: 'Oops'
}
export const FETCH_POST_SUCCESS = {
    type: 'FETCH_POST_SUCCESS',
    response: {}
}

export const requestPost = (data) => {
    return {
        ...FETCH_POST
    }
}

export const errorPost = (data) => {
    return { 
        ...FETCH_POST_ERROR
    }
}

export const receivePosts = (data, json) => {
    return {
      ...FETCH_POST_SUCCESS,
      data,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }