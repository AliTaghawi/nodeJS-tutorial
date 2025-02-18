const notFound = (res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      message: "Route not found",
    })
  );
  res.end();
};

const errorHandlerController = {
  notFound,
};

module.exports = errorHandlerController;
