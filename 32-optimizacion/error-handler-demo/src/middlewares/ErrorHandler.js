import EnumsError from "../utils/EnumsError.js";

export default (error, req, res, next) => {
  console.error(error.cause);
  switch (error.code) {
    case EnumsError.BAD_REQUEST_ERROR:
    case EnumsError.INVALID_PARAMS_ERROR:
      res.status(400).json({ status: 'error', message: error.message });
      break;
    case EnumsError.DATA_BASE_ERROR:
    case EnumsError.ROUTING_ERROR:
      res.status(500).json({ status: 'error', message: error.message });
      break;
    default:
      res.status(500).json({ status: 'error', message: 'Error desconocido' });
      break;
  }
}