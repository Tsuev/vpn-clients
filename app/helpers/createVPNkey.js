const createVPNkey = (id, tg_id) => {
  return `vless://${id}@${process.env.VPN_URL}1?type=tcp&security=reality&pbk=vjf7YHt7y0TsSnXUR78dTT0hEhzhXfRjljngxzSiuWM&fp=chrome&sni=yahoo.com&sid=fb&spx=%2F&flow=xtls-rprx-vision#ADMIN-${tg_id}`;
};

export default createVPNkey;
