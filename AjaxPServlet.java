package com.zheng.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/AjaxPServlet")
/**
 * 服务端实现
 * 需要添加响应头： Access-Control-Allow-Origin
 * @author zhenglian
 *
 */
public class AjaxPServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	resp.setCharacterEncoding("UTF-8");
    	resp.setContentType("text/html;charset=utf-8");
    	//设置使用CORS实现ajax跨域请求
    	resp.setHeader("Access-Control-Allow-Origin", "*");
    	
    	PrintWriter out = resp.getWriter();
    	out.println("helloworld");
    	
    	out.flush();
    	out.close();
    }

}
