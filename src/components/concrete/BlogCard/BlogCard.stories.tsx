import { Typography } from '@material-ui/core';
import React from 'react';
import BlogCard from './BlogCard';


export default {
    title: 'Blog Card',
}

const content = `<h3><strong>Introduction</strong></h3> <p>I have spent quite sometime learning about <em>Machine Learning</em> but I have never documented how to setup a project for <em>Machine Learning. </em>Here I am trying to document it step by step, so I can come back and read it in case I forgot how to do it.</p> <h3>Prerequisite</h3> <p>Some tools that is common in Machine Learning.</p> <ul> <li> <a href="https://docs.conda.io/en/latest/miniconda.html"><strong>Miniconda</strong></a> : It is a minimized version of <a href="https://www.anaconda.com/"><strong>Anaconda</strong></a><strong>. </strong>Think miniconda as a package management tool.</li> <li> <a href="https://pandas.pydata.org/"><strong>Pandas</strong></a> : A data analysis and manipulation tool.</li> <li> <a href="https://numpy.org/"><strong>Numpy</strong></a> : An array manipulation or numerical computing tool with optimization.</li> <li> <a href="https://matplotlib.org/"><strong>Matplotlib</strong></a> : Data visualization tool.</li> <li> <a href="https://scikit-learn.org/stable/"><strong>scikit-learn</strong></a> : A <em>Machine Learning</em> tool.</li> <li> <a href="https://jupyter.org/"><strong>Jupyter notebook</strong></a> : A notebook allow you to write code for <em>Machine Learning</em> and documentation</li> </ul> <h3>Steps</h3> <p>As <strong>miniconda</strong> is a package management tool, libraries such <em>Pandas</em>, <em>Numpy</em>, <em>Matplotlib</em>, <em>scikit-learn</em> and <em>Jupyter notebook</em> can be installed through <strong>miniconda</strong> without install them individually.</p> <ol> <li>Install <strong>miniconda</strong>, to install <strong>miniconda</strong> at local machine for specific platform here is <a href="https://conda.io/projects/conda/en/latest/user-guide/install/index.html"><strong>instruction</strong></a> from offical site.</li> <li>Once <strong>miniconda </strong>had fully installed, create a folder for your project at local machine.</li> <li>Use terminal &amp; command line to go to your project folder and run command :</li> </ol> <pre>conda create --prefix ./env pandas numpy matplotlib scikit-learn jupyter</pre> <p>This command tell <strong>miniconda</strong> to install <em>Pandas</em>, <em>Numpy</em>, <em>Matplotlib</em>, <em>scikit-learn</em> and <em>Jupyter notebook, </em>as well as create a folder name env in directory<em>. </em>With <strong>miniconda</strong>, <strong>project need to work in an environment</strong> which contain all libraries that are installed, otherwise your project will not be able to use libraries. That is the reason here we use</p> <pre>--prefix ./env</pre> <p>to tell <strong>miniconda </strong>where is the environment folder and create one if not exists.</p> <p>Follow <strong>miniconda</strong> instruction and wait until all packages are installed.</p> <p>4. Before we can working on a project, we need to activate environment, as <strong>miniconda</strong> only work in environment. To do so, we can run command</p> <pre>conda activate ./env</pre> <p>This tell miniconda to activate the environment which had <em>Pandas</em>, <em>Numpy</em>, <em>Matplotlib</em>, <em>scikit-learn</em> and <em>Jupyter notebook </em>installed. A way to make sure you are in a right environment, you can run command</p> <pre>conda env list</pre> <p>with output like</p> <figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*9ccFfKEcHV2UX0UBOCuQ1Q.png"></figure><p>These are all environments that are created. Asterisk(*) indicate which environment you are current in. With conda activate command you can either give full path to environment folder or use command line go to project folder and give ./env as parameter.</p> <p>Once you activate your environment, you can start working on project by running command</p> <pre>jupyter</pre> <p>This will start jupyter notebook</p> <figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*r3JkWX6JJubW_VSCs501Fg.png"></figure><p>with jupyter notebook you can manage folders and files.</p> <p>5. Make sure installed libraries are working for project. Create a new python file</p> <figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*NuQRqTsRs9HRmtofJhBH_w.png"></figure><p>and add following code</p> <pre>import numpy as np<br>import pandas as pd<br>import matplotlib.pyplot as plt<br>import sklearn</pre> <p>to cell then run cell or press L-Shift + Enter it might take a while, but without error then it means libraries are import correctly and ready to be used.</p> <h3>Export and import your environment</h3> <p><strong>Miniconda</strong> allow you to export your environment and share with other people, in addition, you don’t need to type library’s name every time you create a new project. To export your environment.</p> <ol> <li>Make sure you are in the environment you want to export by running command conda activate [path to env folder]</li> <li>Run command conda env export &gt; environment.yml this will generate a yml file name <strong>environment</strong> in directory.</li> <li>Share the file to other people.</li> </ol> <p>To create <strong>miniconda</strong> environment from environment file</p> <ol><li>Run command conda env create -p ./env -f environment.yml</li></ol> <blockquote>-p is as same as--prefix</blockquote> <blockquote>-f is point to your exported environment file</blockquote> <h3>Note</h3> <p>conda create command is to create a new environment</p> <p>conda env create command is to create a new environment from environment file</p> <h3>Everything is set and time to Machine Learning</h3> <img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=796ffb4aacf2" width="1" height="1" alt=""><hr> <p><a href="https://medium.com/software-dev-explore/setup-project-for-machine-learning-796ffb4aacf2">Setup project for Machine Learning</a> was originally published in <a href="https://medium.com/software-dev-explore">Software-Dev-Explore</a> on Medium, where people are continuing the conversation by highlighting and responding to this story.</p>`

export const Default = ()=>{
    return (
        <BlogCard 
        raised
        header='This is blog header'
        publishDate='2014-12-22'
        publisher='By Mac Download'
        thumbnailSrc='https://cdn-images-1.medium.com/max/1024/0*1x8QiDeS_qoPniaM'
        content={
            <Typography 
            dangerouslySetInnerHTML={{
                __html:content
            }}
            />
        }
        blogSrc='https://medium.com/software-dev-explore/setup-project-for-machine-learning-796ffb4aacf2?source=rss-83260f508b12------2'
        />
    )
}

export const FixedWidth = ()=>{
    return (
        <BlogCard 
        raised
        width={400}
        header='This is blog header'
        publishDate='2014-12-22'
        publisher='By Mac Download'
        thumbnailSrc='https://cdn-images-1.medium.com/max/1024/0*1x8QiDeS_qoPniaM'
        content={
            <Typography 
            dangerouslySetInnerHTML={{
                __html:content
            }}
            />
        }
        blogSrc='https://medium.com/software-dev-explore/setup-project-for-machine-learning-796ffb4aacf2?source=rss-83260f508b12------2'
        />
    )
}

export const NoThumbnail = ()=>{
    return (
        <BlogCard 
        raised
        header='This is blog header'
        publishDate='2014-12-22'
        publisher='By Mac Download'
        thumbnailSrc=''
        content={
            <Typography 
            dangerouslySetInnerHTML={{
                __html:content
            }}
            />
        }
        blogSrc='https://medium.com/software-dev-explore/setup-project-for-machine-learning-796ffb4aacf2?source=rss-83260f508b12------2'
        />
    )
}

export const Actions = ()=>{
    return (
        <BlogCard 
        raised
        header='This is blog header'
        publishDate='2014-12-22'
        publisher='By Mac Download'
        thumbnailSrc=''
        content={
            <Typography 
            dangerouslySetInnerHTML={{
                __html:content
            }}
            />
        }
        blogSrc='https://medium.com/software-dev-explore/setup-project-for-machine-learning-796ffb4aacf2?source=rss-83260f508b12------2'
        actions={[
            <a href='https://medium.com/software-dev-explore/setup-project-for-machine-learning-796ffb4aacf2?source=rss-83260f508b12------2'>See full blog</a>
        ]}
        />
    )
}