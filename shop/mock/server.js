let http = require('http');
//node的服务器模块
let fs = require('fs');
//fs node的文件模块
let url = require('url')
//请求路径和数据解析
//引入轮播图数据
let sliders = require('./slider');

//readFile 读取文件
// 读取文件 异步操作
function read(cb) {
  fs.readFile('./good.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]) //如果有错误 或者文件没长度就是空数组
    } else {
      cb(JSON.parse(data)) //将读出来的内容转化为对象
    }
  })
}
//writeFile 写入文件
function write(data, cb) {
  fs.writeFile('./good.json', JSON.stringify(data), cb)
}


// 一页只有5要数据
let size = 5;
http.createServer((req, res) => {
  //req request 请求
  //res response 响应
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (res.method == 'OPTIONS') return res.end('200')
  let {
    pathname,
    query
  } = url.parse(req.url, true)
  // path 请求的路径
  //locoalhost:5000/page?page=3
  if (pathname === '/page') {
    res.setHeader('content-type', 'application/json;charset=utf8');
    // page表示前端发来请求的第几页
    let page = parseInt(query.page) || 0;
    //是否还有下一页
    let hasmore = true;
    read(goods => {
      let glist = goods.slice(page * size, (page + 1) * size);
      //------
      // redata  我们拿到的数组的最大值
      // goods.length 已有数组的最大值
      // redata>goods.length 证明没有数据了
      let redata = (page + 1) * size;
      if (redata > goods.length) {
        hasmore = false;
        res.end(JSON.stringify({
          hasmore,
          glist: glist
        }))
      } else {
        res.end(JSON.stringify({
          hasmore,
          glist: glist
        }))
      }
      //-------
    })
    return
  }
  if (pathname === '/slider') {
    res.setHeader('content-type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders))
  }
  if (pathname === '/hot') {
    res.setHeader('content-type', 'application/json;charset=utf8');
    read(goods => {
      let hotGood = goods.reverse().slice(0, 6);
      res.end(JSON.stringify(hotGood))
    })
    return
  }
  if (pathname === "/daleGood") {
    let id = parseInt(query.id);
    read(goods => {
      goods = goods.filter(item => item.id !== id);
      write(goods, () => {
        res.end(JSON.stringify(goods))
      })
    })
    return
  }

  if (pathname === '/add') {
    let str = '';
    req.on('data', chunk => {
      str += chunk
    })
    req.on('end', () => {
      let good = JSON.parse(str);
      read(function (goods) {
        let gl=goods.length;
        good.id = goods.length ? goods[gl-1].id+1:1;
        goods.push(good);
        write(goods, function () {
          res.end(JSON.stringify(good))
        })
      })
    })
    return
  }
  if (pathname === '/update') {
    let str = '';
    req.on('data', chunk => {
      str += chunk
    })
    req.on('end', () => {
      str += chunk
    })
    res.on("end", () => {
      let good = JSON.parse(str);
      read(goods => {
        goods = goods.map(item => {
          if (item.id == id) {
            return good
          }
          return item
        })
        write(goods, () => {
          res.end(JSON.stringify(good))
        })
      })
    })
  }
  if (pathname === '/alllist') {
    let id = parseInt(query.id)
    res.setHeader('content-type', 'application/json;charset=utf8');
    if (id) {
      read(goods => {
        let good = goods.find(item => item.id === id)
        if (good) {
          res.end(JSON.stringify(good))
        } else {
          res.end(JSON.stringify({}))
        }

      })
    } else {
      read(goods => {
        res.end(JSON.stringify(goods))
      })
    }



    return
  }
  //读取静态文件
  fs.stat('.' + pathname, function (err, stats) {

    if (err) {
      fs.createReadStream('index.html').pipe(res)
    } else {
      if (stats.isDirectory()) {


        let p = require('path').join('.' + pathname, './index.html')
        fs.createReadStream(p).pipe(res)
      } else {
        fs.createReadStream('.' + pathname).pipe(res)
      }
    }
  })

}).listen(5000)
//listen 后面是端口号
