module.exports = function(grunt) {

    // include connect-include

     // Project configuration.

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {

            development: {

                files: [{

                    "./src/css/mycss.css":"./src/css/mycss.less"

                }]

            }

        },
      concat: {//css文件合并  
    css: {  
      src: ['./src/css/bootstrap.min.css','./src/css/mycss.min.css'],//当前grunt项目中路径下的src/css目录下的所有css文件  
      dest: './css/mycss2.css'  //生成到grunt项目路径下的dist文件夹下为mycss2.css  
    }  
  },  
  cssmin: { //css文件压缩  
     css: {  
        src: './src/css/mycss.css',//mycss2.css  
        dest: './src/css/mycss.min.css'  //压缩  
      }  
   }  

      
                    }

             



   );

 
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default',['less','cssmin','concat']);

 

 

};