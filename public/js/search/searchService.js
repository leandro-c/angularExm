"use strict";
var services = angular.module("services");

services.service("searchService", ["$http", "api", function ($http, api) {

    this.search = function (params) {
        if (typeof params !== "undefined") {
            params.page = 1;
            params.limit = 30;
        }
        return $http.get("/mock/comments.json", {params: params});
    }
}]);
