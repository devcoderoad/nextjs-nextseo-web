import FAQS from '@data/faqs';

export default function handler(req, res) {
  return res.status(200).json(FAQS);
}
