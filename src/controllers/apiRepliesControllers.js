import apiRepliesServices from '../services/apiRepliesServices'

const createReply = async (req, res) => {
    const data = await apiRepliesServices.createReply(req.body, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const updateReply = async (req, res)=> {
    const data = await apiRepliesServices.updateReply(req.params.id, req.body, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

const deleteReply = async (req, res) => {
    const data = await apiRepliesServices.deleteReply(req.params.id, req.userIdToken)
    if (data.errCode) {
        return res.status(data.errCode).json(data.errors)
    }
    return res.status(200).json(data)
}

module.exports = {
    createReply: createReply,
    updateReply: updateReply,
    deleteReply: deleteReply
}