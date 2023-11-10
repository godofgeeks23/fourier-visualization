# Fourier Visualization

A javascript app to visualize fourier series transformations graphically using p5.js

The Fourier series is a mathematical method used to represent a periodic function as a sum of simple sine and cosine functions. This representation allows the function to be broken down into its constituent frequencies.

Joseph Fourier, a French mathematician, introduced this concept in the early 19th century. He suggested that most periodic functions could be represented as a sum of sine and cosine functions, known as sinusoids. The Fourier series is particularly useful in various fields, especially in mathematics, physics, engineering, and signal processing.

The basic idea behind the Fourier series is that a periodic function f(t)f(t) with a period TT can be represented as:

    f(t)=a0+∑n=1∞(ancos⁡(2πntT)+bnsin⁡(2πntT))f(t)=a0​+∑n=1∞​(an​cos(T2πnt​)+bn​sin(T2πnt​))

Where:

a0a0​ is the average value of the function over one period.
anan​ and bnbn​ are the coefficients that determine the amplitudes of the cosine and sine terms in the series.
nn represents the frequency of the sine and cosine functions.

The process of finding the coefficients a0,an,a0​,an​, and bnbn​ involves integrating the product of the function f(t)f(t) with sine and cosine functions over one period. The coefficients a0,an,a0​,an​, and bnbn​ reveal the contributions of different frequencies to the original function.

By using the Fourier series, various complex periodic functions can be expressed in terms of simpler trigonometric functions, making it easier to analyze and manipulate these functions in many applications, such as in signal processing, electrical engineering, vibrations, heat transfer, and more.