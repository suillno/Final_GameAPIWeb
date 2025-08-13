<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.sql.*"%>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>

<%

//PlatformData
PlatformData pData = new PlatformData();

int nErrorCode = 0;
String strErrorMsg = "START";

/****** JDBC Connection  ******/

Connection conn = null;
Statement stmt = null;
ResultSet rs = null;


try{
	Class.forName("org.sqlite.JDBC");
	//String dbFile = "C:\\JAVA\\sqlite_LiteDB\\nexacro_sample_db.sqlite";	
	conn = DriverManager.getConnection("jdbc:sqlite:C:\\JAVA\\sqlite_LiteDB\\nexacro_sample_db.sqlite");
	stmt = conn.createStatement();
	String sql = "select * from tb_emp";
		
	System.out.println(sql);
		
	rs = stmt.executeQuery(sql);
	
	DataSet ds = new DataSet("out_emp");
	ds.addColumn("EMPL_ID", DataTypes.STRING, 10);
	ds.addColumn("FULL_NAME", DataTypes.STRING, 50);
	ds.addColumn("DEPT_CD", DataTypes.STRING, 10);
	ds.addColumn("POS_CD", DataTypes.STRING, 10);
	ds.addColumn("GENDER", DataTypes.STRING, 10);
	ds.addColumn("HIRE_DATE", DataTypes.DATE, 10);		
	ds.addColumn("MARRIED", DataTypes.STRING, 10);
	ds.addColumn("SALARY", DataTypes.INT, 10);
	ds.addColumn("MEMO", DataTypes.STRING, 10);
	int row = 0;	
	while(rs.next()){
		row = ds.newRow();
		ds.set(row, "EMPL_ID", rs.getString("EMPL_ID"));
		ds.set(row, "FULL_NAME", rs.getString("FULL_NAME"));
		ds.set(row, "DEPT_CD", rs.getString("DEPT_CD"));
		ds.set(row, "POS_CD", rs.getString("POS_CD"));
		ds.set(row, "GENDER", rs.getString("GENDER"));
		ds.set(row, "HIRE_DATE", rs.getDate("HIRE_DATE"));			
		ds.set(row, "MARRIED", rs.getString("MARRIED"));
		ds.set(row, "SALARY", rs.getInt("SALARY"));
		ds.set(row, "MEMO", rs.getString("MEMO"));
	}
	// #1 dataset -> PlatformData
	pData.addDataSet(ds);		
	System.out.println(row);	
	nErrorCode = 0;
	strErrorMsg = "SUCC";
}catch(ClassNotFoundException e){
	System.out.println("org.sqlite.JDBC를 찾지못했습니다.");
}catch(SQLException e){
	nErrorCode = -1;
	strErrorMsg = e.getMessage();	
}
/******** JDBC Close ********/
if( stmt != null ) try { stmt.close(); } catch(Exception e) {}
if ( conn != null ) try {conn.close(); } catch(Exception e) {}

//PlatformData senddata = new PlatformData();
VariableList varList = pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);


HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
res.setData(pData);

// Send data
res.sendData();

%>