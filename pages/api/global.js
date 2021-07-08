import GLOBAL from '@data/global';

export default function handler(req, res) {
  return res.status(200).json(GLOBAL);
}
