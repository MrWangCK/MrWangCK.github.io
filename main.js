// ===== 算法数据定义 =====

const algorithms = {
    sorting: [
        {
            id: 'bubble',
            name: '冒泡排序',
            nameEn: 'Bubble Sort',
            desc: '通过相邻元素的比较和交换，逐步将最大/最小值冒泡到序列一端',
            complexity: { best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>冒泡排序是最简单的排序算法之一，它重复地遍历要排序的数组，比较相邻的两个元素，如果它们的顺序错误就交换它们。</p>
                    <p>遍历数组的过程中，最大的元素会像气泡一样逐渐"浮"到数组的末端，因此得名"冒泡排序"。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从数组的第一个元素开始，比较相邻的两个元素</li>
                        <li>如果前一个元素大于后一个元素，就交换它们</li>
                        <li>对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对</li>
                        <li>针对所有的元素重复以上步骤，除了最后一个</li>
                        <li>持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较</li>
                    </ul>
                </div>
                <div class="theory-section">
                    <h3>关键特点</h3>
                    <div class="key-point">
                        <strong>稳定性</strong>：冒泡排序是稳定的排序算法，相同元素的相对位置不会改变。<br>
                        <strong>适用场景</strong>：适合小规模数据或基本有序的数据。
                    </div>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BubbleSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        <span class="code-keyword">for</span> j ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-i-<span class="code-number">2</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">            <span class="code-keyword">if</span> arr[j] > arr[j+<span class="code-number">1</span>] <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">                swap(arr[j], arr[j+<span class="code-number">1</span>])</span>',
                '<span class="code-line" data-line="6">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="9"><span class="code-keyword">end procedure</span></span>'
            ],
            python: `<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bubble_sort</span>(arr):</span>
<span class="code-line">    <span class="code-string">"""冒泡排序"""</span></span>
<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>
<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>
<span class="code-line">        swapped = <span class="code-keyword">False</span></span>
<span class="code-line">        <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(n - i - <span class="code-number">1</span>):</span>
<span class="code-line">            <span class="code-keyword">if</span> arr[j] > arr[j + <span class="code-number">1</span>]:</span>
<span class="code-line">                arr[j], arr[j + <span class="code-number">1</span>] = arr[j + <span class="code-number">1</span>], arr[j]</span>
<span class="code-line">                swapped = <span class="code-keyword">True</span></span>
<span class="code-line">        <span class="code-keyword">if</span> <span class="code-keyword">not</span> swapped:</span>
<span class="code-line">            <span class="code-keyword">break</span></span>
<span class="code-line">    <span class="code-keyword">return</span> arr</span>`,
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                // 外层循环初始化
                steps.push({ type: 'init', array: [...a], line: 1, message: `n = length(arr) = ${n}` });
                for (let i = 0; i < n - 1; i++) {
                    // 外层循环开始
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 2, message: `外层循环: i = ${i}` });
                    for (let j = 0; j < n - i - 1; j++) {
                        // 内层循环开始
                        steps.push({ type: 'loop-start', indices: [j, j+1], array: [...a], line: 3, message: `内层循环: j = ${j}` });
                        // 比较
                        steps.push({ type: 'compare', indices: [j, j + 1], array: [...a], line: 4, message: `比较 arr[${j}]=${a[j]} 和 arr[${j+1}]=${a[j+1]}` });
                        if (a[j] > a[j + 1]) {
                            // 交换
                            steps.push({ type: 'swap-start', indices: [j, j + 1], array: [...a], line: 5, message: `准备交换 arr[${j}] 和 arr[${j+1}]` });
                            [a[j], a[j + 1]] = [a[j + 1], a[j]];
                            steps.push({ type: 'swap', indices: [j, j + 1], array: [...a], line: 5, message: `交换 ${a[j+1]} 和 ${a[j]}` });
                        }
                        // if结束
                        steps.push({ type: 'code-line', array: [...a], line: 6, message: '条件判断结束' });
                    }
                    // 内层循环结束
                    steps.push({ type: 'loop-end', array: [...a], line: 7, message: `内层循环结束, j = ${n - i - 2}` });
                    steps.push({ type: 'sorted', index: n - i - 1, array: [...a], line: 7, message: `位置 ${n-i-1} 已排序` });
                }
                // 外层循环结束
                steps.push({ type: 'loop-end', array: [...a], line: 8, message: '外层循环结束' });
                steps.push({ type: 'complete', array: [...a], line: 9, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'selection',
            name: '选择排序',
            nameEn: 'Selection Sort',
            desc: '每次从未排序区间选择最小/最大元素放到已排序序列末尾',
            complexity: { best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>选择排序的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，放到已排序的末尾。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置</li>
                        <li>再从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾</li>
                        <li>重复第二步，直到所有元素均排序完毕</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">SelectionSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-<span class="code-number">2</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        min_idx ← i</span>',
                '<span class="code-line" data-line="4">        <span class="code-keyword">for</span> j ← i+<span class="code-number">1</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="5">            <span class="code-keyword">if</span> arr[j] < arr[min_idx] <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="6">                min_idx ← j</span>',
                '<span class="code-line" data-line="7">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="8">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="9">        swap(arr[i], arr[min_idx])</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">selection_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""选择排序"""</span></span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n - <span class="code-number">1</span>):</span>',
                '<span class="code-line">        min_idx = i</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(i + <span class="code-number">1</span>, n):</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> arr[j] < arr[min_idx]:</span>',
                '<span class="code-line">                min_idx = j</span>',
                '<span class="code-line">        arr[i], arr[min_idx] = arr[min_idx], arr[i]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                steps.push({ type: 'init', array: [...a], line: 1, message: `n = ${n}` });
                for (let i = 0; i < n - 1; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 2, message: `外层循环: i = ${i}` });
                    let minIdx = i;
                    steps.push({ type: 'code-line', indices: [i], array: [...a], line: 3, message: `min_idx = ${i}` });
                    for (let j = i + 1; j < n; j++) {
                        steps.push({ type: 'loop-start', indices: [j], array: [...a], line: 4, message: `内层循环: j = ${j}` });
                        steps.push({ type: 'compare', indices: [minIdx, j], array: [...a], line: 5, message: `比较 arr[${j}]=${a[j]} 和 arr[min_idx]=${a[minIdx]}` });
                        if (a[j] < a[minIdx]) {
                            minIdx = j;
                            steps.push({ type: 'code-line', indices: [j], array: [...a], line: 6, message: `更新 min_idx = ${j}` });
                        }
                        steps.push({ type: 'code-line', array: [...a], line: 7, message: 'if结束' });
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: 8, message: '内层循环结束' });
                    if (minIdx !== i) {
                        [a[i], a[minIdx]] = [a[minIdx], a[i]];
                        steps.push({ type: 'swap', indices: [i, minIdx], array: [...a], line: 9, message: `交换 arr[${i}] 和 arr[${minIdx}]` });
                    }
                    steps.push({ type: 'sorted', index: i, array: [...a], line: 10, message: `位置 ${i} 已排序` });
                }
                steps.push({ type: 'loop-end', array: [...a], line: 10, message: '外层循环结束' });
                steps.push({ type: 'complete', array: [...a], line: 11, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'insertion',
            name: '插入排序',
            nameEn: 'Insertion Sort',
            desc: '将元素插入到已排序序列中的正确位置，像整理扑克牌一样',
            complexity: { best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>插入排序的工作方式像整理手中的扑克牌。将每一张牌插入到已经排好序的牌中的适当位置，直到所有牌都整理好。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从第一个元素开始，该元素可以认为已经被排序</li>
                        <li>取出下一个元素，在已经排序的元素序列中从后向前扫描</li>
                        <li>如果该元素（已排序）大于新元素，将该元素移到下一位置</li>
                        <li>重复步骤3，直到找到已排序的元素小于或等于新元素的位置</li>
                        <li>将新元素插入到该位置后</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">InsertionSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">1</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        key ← arr[i]</span>',
                '<span class="code-line" data-line="4">        j ← i - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">while</span> j ≥ <span class="code-number">0</span> <span class="code-keyword">and</span> arr[j] > key <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="6">            arr[j+<span class="code-number">1</span>] ← arr[j]</span>',
                '<span class="code-line" data-line="7">            j ← j - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="8">        <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="9">        arr[j+<span class="code-number">1</span>] ← key</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">insertion_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""插入排序"""</span></span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-number">1</span>, n):</span>',
                '<span class="code-line">        key = arr[i]</span>',
                '<span class="code-line">        j = i - <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">while</span> j >= <span class="code-number">0</span> <span class="code-keyword">and</span> arr[j] > key:</span>',
                '<span class="code-line">            arr[j + <span class="code-number">1</span>] = arr[j]</span>',
                '<span class="code-line">            j -= <span class="code-number">1</span></span>',
                '<span class="code-line">        arr[j + <span class="code-number">1</span>] = key</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                steps.push({ type: 'sorted', index: 0, array: [...a], line: 1, message: '初始状态' });
                for (let i = 1; i < n; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 2, message: `开始处理第 ${i} 个元素` });
                    const key = a[i];
                    steps.push({ type: 'code-line', indices: [i], array: [...a], line: 3, message: `key = arr[${i}] = ${key}` });
                    let j = i - 1;
                    steps.push({ type: 'code-line', indices: [j], array: [...a], line: 4, message: `j = ${j}` });
                    while (j >= 0 && a[j] > key) {
                        steps.push({ type: 'compare', indices: [j, j + 1], array: [...a], line: 5, message: `while条件: arr[${j}]=${a[j]} > key=${key}` });
                        a[j + 1] = a[j];
                        steps.push({ type: 'shift', index: j + 1, array: [...a], line: 6, message: `移动 arr[${j}]=${a[j]} 到位置 ${j+1}` });
                        j--;
                        if (j >= 0) {
                            steps.push({ type: 'code-line', indices: [j], array: [...a], line: 7, message: `j = ${j}` });
                        }
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: 8, message: 'while循环结束' });
                    a[j + 1] = key;
                    steps.push({ type: 'insert', index: j + 1, array: [...a], line: 9, message: `插入 key=${key} 到位置 ${j+1}` });
                    steps.push({ type: 'sorted', index: i, array: [...a], line: 10, message: `前 ${i+1} 个元素已排序` });
                }
                steps.push({ type: 'loop-end', array: [...a], line: 10, message: 'for循环结束' });
                steps.push({ type: 'complete', array: [...a], line: 11, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'quick',
            name: '快速排序',
            nameEn: 'Quick Sort',
            desc: '选择枢轴元素，将数组分区，递归排序子数组',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>快速排序采用分治策略，通过一趟排序将数据分成两部分，其中一部分的所有数据都比另一部分的所有数据小，然后再按此方法对这两部分数据分别进行快速排序。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从数列中挑出一个元素，称为"枢轴"(pivot)</li>
                        <li>分区：把所有比枢轴小的元素放在它左边，比它大的放在右边</li>
                        <li>递归地对左右两个分区进行同样的操作</li>
                        <li>递归的终止条件是分区的大小是零或一</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">QuickSort</span>(arr, low, high)</span>',
                '<span class="code-line" data-line="1">    <span class="code-keyword">if</span> low < high <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="2">        pivot_idx ← Partition(arr, low, high)</span>',
                '<span class="code-line" data-line="3">        QuickSort(arr, low, pivot_idx-<span class="code-number">1</span>)</span>',
                '<span class="code-line" data-line="4">        QuickSort(arr, pivot_idx+<span class="code-number">1</span>, high)</span>',
                '<span class="code-line" data-line="5">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="6"><span class="code-keyword">end procedure</span></span>',
                '<span class="code-line" data-line="7"></span>',
                '<span class="code-line" data-line="8"><span class="code-keyword">procedure</span> <span class="code-function">Partition</span>(arr, low, high)</span>',
                '<span class="code-line" data-line="9">    pivot ← arr[high]</span>',
                '<span class="code-line" data-line="10">    i ← low - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="11">    <span class="code-keyword">for</span> j ← low <span class="code-keyword">to</span> high-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="12">        <span class="code-keyword">if</span> arr[j] ≤ pivot <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="13">            i ← i + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="14">            swap(arr[i], arr[j])</span>',
                '<span class="code-line" data-line="15">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="16">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="17">    swap(arr[i+<span class="code-number">1</span>], arr[high])</span>',
                '<span class="code-line" data-line="18">    <span class="code-keyword">return</span> i + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="19"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">quick_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""快速排序"""</span></span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-function">len</span>(arr) <= <span class="code-number">1</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> arr</span>',
                '<span class="code-line">    pivot = arr[<span class="code-function">len</span>(arr) // <span class="code-number">2</span>]</span>',
                '<span class="code-line">    left = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> arr <span class="code-keyword">if</span> x < pivot]</span>',
                '<span class="code-line">    middle = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> arr <span class="code-keyword">if</span> x == pivot]</span>',
                '<span class="code-line">    right = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> arr <span class="code-keyword">if</span> x > pivot]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> quick_sort(left) + middle + quick_sort(right)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                let partitionStartLine = 8;
                function partition(low, high) {
                    steps.push({ type: 'code-line', range: [low, high], array: [...a], line: partitionStartLine + 1, message: `选择枢轴` });
                    const pivot = a[high];
                    steps.push({ type: 'pivot', index: high, array: [...a], line: partitionStartLine + 2, message: `pivot = arr[${high}] = ${pivot}` });
                    let i = low - 1;
                    steps.push({ type: 'code-line', indices: [i+1], array: [...a], line: partitionStartLine + 3, message: `i = ${i}` });
                    for (let j = low; j < high; j++) {
                        steps.push({ type: 'loop-start', indices: [j], array: [...a], line: partitionStartLine + 4, message: `遍历: j = ${j}` });
                        steps.push({ type: 'compare', indices: [j, high], array: [...a], line: partitionStartLine + 5, message: `比较 arr[${j}]=${a[j]} 和 pivot=${pivot}` });
                        if (a[j] <= pivot) {
                            i++;
                            steps.push({ type: 'code-line', indices: [i], array: [...a], line: partitionStartLine + 6, message: `i++ = ${i}` });
                            if (i !== j) {
                                [a[i], a[j]] = [a[j], a[i]];
                                steps.push({ type: 'swap', indices: [i, j], array: [...a], line: partitionStartLine + 7, message: `交换 arr[${i}] 和 arr[${j}]` });
                            }
                        }
                        steps.push({ type: 'code-line', array: [...a], line: partitionStartLine + 8, message: 'if结束' });
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: partitionStartLine + 9, message: 'for循环结束' });
                    if (i + 1 !== high) {
                        [a[i + 1], a[high]] = [a[high], a[i + 1]];
                        steps.push({ type: 'swap', indices: [i + 1, high], array: [...a], line: partitionStartLine + 10, message: `将枢轴放到正确位置` });
                    }
                    steps.push({ type: 'sorted', index: i + 1, array: [...a], line: partitionStartLine + 11, message: `返回枢轴位置: ${i+1}` });
                    return i + 1;
                }
                function quickSort(low, high) {
                    steps.push({ type: 'code-line', range: [low, high], array: [...a], line: 1, message: `QuickSort(${low}, ${high})` });
                    if (low < high) {
                        steps.push({ type: 'code-line', range: [low, high], array: [...a], line: 2, message: `需要分区` });
                        const pi = partition(low, high);
                        steps.push({ type: 'code-line', range: [low, pi-1], array: [...a], line: 3, message: `递归左半部分` });
                        quickSort(low, pi - 1);
                        steps.push({ type: 'code-line', range: [pi+1, high], array: [...a], line: 4, message: `递归右半部分` });
                        quickSort(pi + 1, high);
                    } else {
                        steps.push({ type: 'sorted', index: low, array: [...a], line: 5, message: `位置 ${low} 已排序` });
                    }
                }
                quickSort(0, a.length - 1);
                steps.push({ type: 'complete', array: [...a], line: 6, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'merge',
            name: '归并排序',
            nameEn: 'Merge Sort',
            desc: '分治策略，将数组分成子数组，排序后合并',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>归并排序采用分治法，将数组分成若干个子数组，每个子数组是有序的，然后再将子数组合并成一个有序数组。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>Divide：将数组从中间分成左右两部分</li>
                        <li>Conquer：递归地对左右两部分进行排序</li>
                        <li>Merge：将排序好的两部分合并成一个大数组</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">MergeSort</span>(arr, left, right)</span>',
                '<span class="code-line" data-line="1">    <span class="code-keyword">if</span> left < right <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="2">        mid ← (left + right) / <span class="code-number">2</span></span>',
                '<span class="code-line" data-line="3">        MergeSort(arr, left, mid)</span>',
                '<span class="code-line" data-line="4">        MergeSort(arr, mid+<span class="code-number">1</span>, right)</span>',
                '<span class="code-line" data-line="5">        Merge(arr, left, mid, right)</span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">merge_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""归并排序"""</span></span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-function">len</span>(arr) <= <span class="code-number">1</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> arr</span>',
                '<span class="code-line">    mid = <span class="code-function">len</span>(arr) // <span class="code-number">2</span></span>',
                '<span class="code-line">    left = merge_sort(arr[:mid])</span>',
                '<span class="code-line">    right = merge_sort(arr[mid:])</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> merge(left, right)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                function mergeSort(arr, left, right) {
                    if (left >= right) return;
                    const mid = Math.floor((left + right) / 2);
                    steps.push({ type: 'divide', indices: [left, mid, right], array: [...a], line: 1, message: `分割: [${left}..${mid}] 和 [${mid+1}..${right}]` });
                    steps.push({ type: 'code-line', array: [...a], line: 2, message: `mid = ${mid}` });
                    steps.push({ type: 'code-line', range: [left, mid], array: [...a], line: 3, message: `递归左半部分` });
                    mergeSort(arr, left, mid);
                    steps.push({ type: 'code-line', range: [mid+1, right], array: [...a], line: 4, message: `递归右半部分` });
                    mergeSort(arr, mid + 1, right);
                    steps.push({ type: 'code-line', array: [...a], line: 5, message: `合并 [${left}..${right}]` });
                    merge(arr, left, mid, right);
                }
                function merge(arr, left, mid, right) {
                    const leftArr = arr.slice(left, mid + 1);
                    const rightArr = arr.slice(mid + 1, right + 1);
                    let i = 0, j = 0, k = left;
                    while (i < leftArr.length && j < rightArr.length) {
                        steps.push({ type: 'compare', indices: [left + i, mid + 1 + j], array: [...a], line: 5, message: `比较: ${leftArr[i]} vs ${rightArr[j]}` });
                        if (leftArr[i] <= rightArr[j]) {
                            arr[k] = leftArr[i];
                            i++;
                        } else {
                            arr[k] = rightArr[j];
                            j++;
                        }
                        steps.push({ type: 'merge', index: k, array: [...a], line: 5, message: `放入位置 ${k}: ${arr[k]}` });
                        k++;
                    }
                    while (i < leftArr.length) {
                        arr[k] = leftArr[i];
                        steps.push({ type: 'merge', index: k, array: [...a], line: 5, message: `放入剩余左: ${arr[k]}` });
                        i++; k++;
                    }
                    while (j < rightArr.length) {
                        arr[k] = rightArr[j];
                        steps.push({ type: 'merge', index: k, array: [...a], line: 5, message: `放入剩余右: ${arr[k]}` });
                        j++; k++;
                    }
                }
                mergeSort(a, 0, a.length - 1);
                steps.push({ type: 'complete', array: [...a], line: 7, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'heap',
            name: '堆排序',
            nameEn: 'Heap Sort',
            desc: '利用堆数据结构设计的排序算法',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>堆排序利用堆这种数据结构进行排序。堆是一个近似完全二叉树的结构，同时满足堆的性质：即子节点的键值总是小于（或大于）它的父节点。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>将数组构建成最大堆</li>
                        <li>将堆顶（最大值）与堆尾交换</li>
                        <li>将堆的大小减1，然后重新调整堆</li>
                        <li>重复步骤2~3，直到堆的大小为1</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">HeapSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-comment"># 构建最大堆</span></span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">for</span> i ← n/<span class="code-number">2</span>-<span class="code-number">1</span> <span class="code-keyword">downto</span> <span class="code-number">0</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        Heapify(arr, n, i)</span>',
                '<span class="code-line" data-line="5">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">for</span> i ← n-<span class="code-number">1</span> <span class="code-keyword">downto</span> <span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="7">        swap(arr[<span class="code-number">0</span>], arr[i])</span>',
                '<span class="code-line" data-line="8">        Heapify(arr, i, <span class="code-number">0</span>)</span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="10"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">heap_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""堆排序"""</span></span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n // <span class="code-number">2</span> - <span class="code-number">1</span>, -<Span class="code-number">1</span>, -<span class="code-number">1</span>):</span>',
                '<span class="code-line">        heapify(arr, n, i)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n - <span class="code-number">1</span>, <span class="code-number">0</span>, -<span class="code-number">1</span>):</span>',
                '<span class="code-line">        arr[<span class="code-number">0</span>], arr[i] = arr[i], arr[<span class="code-number">0</span>]</span>',
                '<span class="code-line">        heapify(arr, i, <span class="code-number">0</span>)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                function heapify(size, i, startLine) {
                    let largest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;
                    if (left < size) {
                        steps.push({ type: 'compare', indices: [largest, left], array: [...a], line: startLine, message: `比较 ${a[largest]} 和左子节点 ${a[left]}` });
                        if (a[left] > a[largest]) largest = left;
                    }
                    if (right < size) {
                        steps.push({ type: 'compare', indices: [largest, right], array: [...a], line: startLine, message: `比较 ${a[largest]} 和右子节点 ${a[right]}` });
                        if (a[right] > a[largest]) largest = right;
                    }
                    if (largest !== i) {
                        [a[i], a[largest]] = [a[largest], a[i]];
                        steps.push({ type: 'swap', indices: [i, largest], array: [...a], line: startLine, message: `交换 ${a[largest]} 和 ${a[i]}` });
                        heapify(size, largest, startLine);
                    }
                }
                steps.push({ type: 'code-line', array: [...a], line: 1, message: `n = ${n}` });
                steps.push({ type: 'message', array: [...a], line: 2, message: '构建最大堆' });
                for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 3, message: `Heapify(i=${i})` });
                    heapify(n, i, 4);
                }
                steps.push({ type: 'loop-end', array: [...a], line: 5, message: '构建堆完成' });
                steps.push({ type: 'message', array: [...a], line: 6, message: '开始排序' });
                for (let i = n - 1; i > 0; i--) {
                    [a[0], a[i]] = [a[i], a[0]];
                    steps.push({ type: 'loop-start', indices: [0, i], array: [...a], line: 7, message: `交换堆顶和位置 ${i}` });
                    steps.push({ type: 'swap', indices: [0, i], array: [...a], line: 7, message: `将 ${a[i]} 放到位置 ${i}` });
                    steps.push({ type: 'sorted', index: i, array: [...a], line: 7, message: `位置 ${i} 已排序` });
                    steps.push({ type: 'code-line', array: [...a], line: 8, message: `Heapify(i=${i})` });
                    heapify(i, 0, 8);
                }
                steps.push({ type: 'sorted', index: 0, array: [...a], line: 9, message: '排序完成' });
                steps.push({ type: 'complete', array: [...a], line: 10, message: '排序完成!' });
                return steps;
            }
        }
    ],
    searching: [
        {
            id: 'linear',
            name: '线性搜索',
            nameEn: 'Linear Search',
            desc: '从头到尾遍历数组查找目标元素',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>线性搜索是最简单的搜索算法，它按顺序检查数组中的每个元素，直到找到目标或遍历完所有元素。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从数组的第一个元素开始</li>
                        <li>比较当前元素与目标值</li>
                        <li>如果相等，返回当前位置</li>
                        <li>如果不等，移动到下一个元素</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">LinearSearch</span>(arr, target)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        <span class="code-keyword">if</span> arr[i] = target <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="4">            <span class="code-keyword">return</span> i</span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="7">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>',
                '<span class="code-line" data-line="8"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">linear_search</span>(arr, target):</span>',
                '<span class="code-line">    <span class="code-string">"""线性搜索"""</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-function">len</span>(arr)):</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> arr[i] == target:</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> i</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const t = a[Math.floor(Math.random() * a.length)];
                steps.push({ type: 'start', array: a, target: t, line: 0, message: `搜索目标: ${t}` });
                steps.push({ type: 'code-line', array: a, line: 1, message: `n = ${a.length}` });
                for (let i = 0; i < a.length; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: a, target: t, line: 2, message: `遍历 i = ${i}` });
                    steps.push({ type: 'check', index: i, array: a, target: t, line: 3, message: `检查 arr[${i}] = ${a[i]}` });
                    if (a[i] === t) {
                        steps.push({ type: 'found', index: i, array: a, target: t, line: 4, message: `找到目标 ${t} 在位置 ${i}!` });
                        return steps;
                    }
                    steps.push({ type: 'code-line', array: a, line: 5, message: '不匹配，继续' });
                }
                steps.push({ type: 'loop-end', array: a, line: 6, message: '遍历完成' });
                steps.push({ type: 'not_found', array: a, target: t, line: 7, message: '未找到目标' });
                return steps;
            }
        },
        {
            id: 'binary',
            name: '二分搜索',
            nameEn: 'Binary Search',
            desc: '在有序数组中快速定位目标元素',
            complexity: { best: 'O(1)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>二分搜索适用于有序数组，通过每次将搜索范围缩小一半来快速定位目标元素。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>确定搜索范围的左右边界</li>
                        <li>计算中间位置</li>
                        <li>比较中间元素与目标值</li>
                        <li>如果目标较小，搜索左半部分；否则搜索右半部分</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BinarySearch</span>(arr, target)</span>',
                '<span class="code-line" data-line="1">    left ← <span class="code-number">0</span></span>',
                '<span class="code-line" data-line="2">    right ← length(arr) - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> left ≤ right <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        mid ← (left + right) / <span class="code-number">2</span></span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">if</span> arr[mid] = target <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="6">            <span class="code-keyword">return</span> mid</span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">else if</span> arr[mid] < target <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="8">            left ← mid + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="9">        <span class="code-keyword">else</span></span>',
                '<span class="code-line" data-line="10">            right ← mid - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="11">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="12">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="13">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>',
                '<span class="code-line" data-line="14"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">binary_search</span>(arr, target):</span>',
                '<span class="code-line">    <span class="code-string">"""二分搜索"""</span></span>',
                '<span class="code-line">    left, right = <span class="code-number">0</span>, <span class="code-function">len</span>(arr) - <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> left <= right:</span>',
                '<span class="code-line">        mid = (left + right) // <span class="code-number">2</span></span>',
                '<span class="code-line">        <span class="code-keyword">if</span> arr[mid] == target:</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> mid</span>',
                '<span class="code-line">        <span class="code-keyword">elif</span> arr[mid] < target:</span>',
                '<span class="code-line">            left = mid + <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            right = mid - <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr].sort((a, b) => a - b);
                const t = a[Math.floor(Math.random() * a.length)];
                steps.push({ type: 'start', array: a, target: t, line: 0, message: `搜索目标: ${t} (数组已排序)` });
                let left = 0, right = a.length - 1;
                steps.push({ type: 'code-line', indices: [left], array: a, line: 1, message: `left = ${left}` });
                steps.push({ type: 'code-line', indices: [right], array: a, line: 2, message: `right = ${right}` });
                while (left <= right) {
                    steps.push({ type: 'loop-start', indices: [left, right], array: a, line: 3, message: `while条件: ${left} ≤ ${right}` });
                    const mid = Math.floor((left + right) / 2);
                    steps.push({ type: 'code-line', indices: [mid], array: a, line: 4, message: `mid = (${left} + ${right}) / 2 = ${mid}` });
                    steps.push({ type: 'check', index: mid, range: [left, right], array: a, target: t, line: 5, message: `检查 arr[${mid}] = ${a[mid]}` });
                    if (a[mid] === t) {
                        steps.push({ type: 'found', index: mid, array: a, target: t, line: 6, message: `找到目标 ${t} 在位置 ${mid}!` });
                        return steps;
                    } else if (a[mid] < t) {
                        steps.push({ type: 'code-line', indices: [mid], array: a, line: 7, message: `${a[mid]} < ${t}，搜索右半部分` });
                        steps.push({ type: 'code-line', indices: [left], array: a, line: 8, message: `left = ${mid + 1}` });
                        left = mid + 1;
                    } else {
                        steps.push({ type: 'code-line', indices: [mid], array: a, line: 9, message: `${a[mid]} > ${t}，搜索左半部分` });
                        steps.push({ type: 'code-line', indices: [right], array: a, line: 10, message: `right = ${mid - 1}` });
                        right = mid - 1;
                    }
                    steps.push({ type: 'code-line', array: a, line: 11, message: '条件判断结束' });
                }
                steps.push({ type: 'loop-end', array: a, line: 12, message: 'while循环结束' });
                steps.push({ type: 'not_found', array: a, target: t, line: 13, message: '未找到目标' });
                return steps;
            }
        }
    ],
    'linked-list': [
        {
            id: 'll-create',
            name: '链表创建',
            nameEn: 'Linked List Creation',
            desc: '创建链表节点并连接成链表结构',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>什么是链表？</h3>
                    <p>链表是一种线性数据结构，每个节点包含数据和指向下一个节点的指针。与数组不同，链表的节点在内存中不必连续存放。</p>
                </div>
                <div class="theory-section">
                    <h3>节点结构</h3>
                    <ul>
                        <li><strong>data</strong>：存储数据</li>
                        <li><strong>next</strong>：指向下一个节点的指针</li>
                        <li>最后一个节点的 next 指向 null</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">class</span> <span class="code-function">Node</span></span>',
                '<span class="code-line" data-line="1">    data</span>',
                '<span class="code-line" data-line="2">    next ← <span class="code-keyword">null</span></span>',
                '<span class="code-line" data-line="3"></span>',
                '<span class="code-line" data-line="4"><span class="code-keyword">procedure</span> <span class="code-function">CreateLinkedList</span>(values)</span>',
                '<span class="code-line" data-line="5">    head ← <span class="code-keyword">null</span></span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">for each</span> value <span class="code-keyword">in</span> values <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="7">        new_node ← Node(value)</span>',
                '<span class="code-line" data-line="8">        new_node.next ← head</span>',
                '<span class="code-line" data-line="9">        head ← new_node</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11">    <span class="code-keyword">return</span> head</span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">Node</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, data):</span>',
                '<span class="code-line">        self.data = data</span>',
                '<span class="code-line">        self.next = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">create_linked_list</span>(values):</span>',
                '<span class="code-line">    head = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> value <span class="code-keyword">in</span> values:</span>',
                '<span class="code-line">        new_node = Node(value)</span>',
                '<span class="code-line">        new_node.next = head</span>',
                '<span class="code-line">        head = new_node</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> head</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const list = [];
                steps.push({ type: 'start', list: [], line: 4, message: '开始创建链表' });
                steps.push({ type: 'code-line', list: [], line: 5, message: 'head = null' });
                for (let i = 0; i < arr.length; i++) {
                    steps.push({ type: 'loop-start', list: [...list], line: 6, message: `处理值: ${arr[i]}` });
                    steps.push({ type: 'code-line', list: [...list], line: 7, message: `创建新节点 Node(${arr[i]})` });
                    list.unshift(arr[i]);
                    steps.push({ type: 'code-line', list: [...list], line: 8, message: `new_node.next = head` });
                    steps.push({ type: 'insert', list: [...list], line: 9, message: `head = ${arr[i]}` });
                }
                steps.push({ type: 'loop-end', list: [...list], line: 10, message: '遍历完成' });
                steps.push({ type: 'complete', list: [...list], line: 11, message: '链表创建完成' });
                return steps;
            }
        },
        {
            id: 'll-reverse',
            name: '链表反转',
            nameEn: 'Linked List Reverse',
            desc: '将链表的方向反转',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>链表反转通过改变每个节点的 next 指针方向来实现。使用三个指针：prev、curr、next，在遍历过程中不断改变指针方向。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>初始化 prev = null, curr = head</li>
                        <li>保存 curr.next 到 next</li>
                        <li>将 curr.next 指向 prev</li>
                        <li>移动 prev 和 curr 到下一个位置</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">ReverseLinkedList</span>(head)</span>',
                '<span class="code-line" data-line="1">    prev ← <span class="code-keyword">null</span></span>',
                '<span class="code-line" data-line="2">    curr ← head</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> curr ≠ <span class="code-keyword">null</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        next ← curr.next</span>',
                '<span class="code-line" data-line="5">        curr.next ← prev</span>',
                '<span class="code-line" data-line="6">        prev ← curr</span>',
                '<span class="code-line" data-line="7">        curr ← next</span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">return</span> prev</span>',
                '<span class="code-line" data-line="10"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">reverse_linked_list</span>(head):</span>',
                '<span class="code-line">    prev = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    curr = head</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> curr:</span>',
                '<span class="code-line">        next_temp = curr.next</span>',
                '<span class="code-line">        curr.next = prev</span>',
                '<span class="code-line">        prev = curr</span>',
                '<span class="code-line">        curr = next_temp</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> prev</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const list = [...arr];
                steps.push({ type: 'start', list: [...list], line: 0, message: '开始链表反转' });
                steps.push({ type: 'code-line', list: [...list], line: 1, message: 'prev = null' });
                let prev = null;
                let curr = 0;
                steps.push({ type: 'code-line', list: [...list], line: 2, message: `curr = head (${list[0]})` });
                while (curr < list.length) {
                    steps.push({ type: 'loop-start', list: [...list], line: 3, message: `while curr ≠ null: curr=${curr < list.length ? list[curr] : 'null'}` });
                    const next = curr + 1;
                    steps.push({ type: 'code-line', list: [...list], line: 4, message: `next = curr.next = ${next < list.length ? list[next] : 'null'}` });
                    steps.push({ type: 'reverse', list: [...list], line: 5, message: `curr.next = prev = ${prev !== null ? list[prev] : 'null'}` });
                    prev = curr;
                    steps.push({ type: 'code-line', list: [...list], line: 6, message: `prev = ${prev !== null ? list[prev] : 'null'}` });
                    curr = next;
                    steps.push({ type: 'code-line', list: [...list], line: 7, message: `curr = ${curr < list.length ? list[curr] : 'null'}` });
                }
                steps.push({ type: 'loop-end', list: [...list], line: 8, message: 'while循环结束' });
                steps.push({ type: 'complete', list: [...list].reverse(), line: 9, message: '返回新头节点' });
                return steps;
            }
        }
    ],
    tree: [
        {
            id: 'bst-insert',
            name: 'BST插入',
            nameEn: 'BST Insert',
            desc: '在二叉搜索树中插入新节点',
            complexity: { best: 'O(log n)', avg: 'O(log n)', worst: 'O(n)', space: 'O(h)' },
            theory: `
                <div class="theory-section">
                    <h3>什么是二叉搜索树？</h3>
                    <p>二叉搜索树(BST)是一种特殊的二叉树，满足以下性质：</p>
                    <ul>
                        <li>左子树的所有节点值小于根节点值</li>
                        <li>右子树的所有节点值大于根节点值</li>
                    </ul>
                </div>
                <div class="theory-section">
                    <h3>插入规则</h3>
                    <ul>
                        <li>从根节点开始比较</li>
                        <li>如果值小于当前节点，转向左子树</li>
                        <li>如果值大于当前节点，转向右子树</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BSTInsert</span>(root, value)</span>',
                '<span class="code-line" data-line="1">    <span class="code-keyword">if</span> root = <span class="code-keyword">null</span> <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="2">        <span class="code-keyword">return</span> Node(value)</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="4">    <span class="code-keyword">if</span> value < root.value <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">        root.left ← BSTInsert(root.left, value)</span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">else</span></span>',
                '<span class="code-line" data-line="7">        root.right ← BSTInsert(root.right, value)</span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">return</span> root</span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">TreeNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.left = <span class="code-keyword">None</span></span>',
                '<span class="code-line">        self.right = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bst_insert</span>(root, val):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-keyword">not</span> root:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> TreeNode(val)</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> val < root.val:</span>',
                '<span class="code-line">        root.left = bst_insert(root.left, val)</span>',
                '<span class="code-line">    <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">        root.right = bst_insert(root.right, val)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> root</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const tree = { val: arr[0], left: null, right: null };
                steps.push({ type: 'insert', tree: JSON.parse(JSON.stringify(tree)), line: 0, message: `插入根节点 ${arr[0]}` });
                for (let i = 1; i < arr.length; i++) {
                    let node = tree;
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 0, message: `插入值 ${arr[i]}` });
                    while (true) {
                        if (arr[i] < node.val) {
                            steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 1, message: `${arr[i]} < ${node.val}，向左` });
                            if (node.left === null) {
                                node.left = { val: arr[i], left: null, right: null };
                                steps.push({ type: 'insert', tree: JSON.parse(JSON.stringify(tree)), line: 2, message: `插入 ${arr[i]} 到 ${node.val} 的左子树` });
                                break;
                            }
                            node = node.left;
                        } else {
                            steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 4, message: `${arr[i]} >= ${node.val}，向右` });
                            if (node.right === null) {
                                node.right = { val: arr[i], left: null, right: null };
                                steps.push({ type: 'insert', tree: JSON.parse(JSON.stringify(tree)), line: 7, message: `插入 ${arr[i]} 到 ${node.val} 的右子树` });
                                break;
                            }
                            node = node.right;
                        }
                    }
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 9, message: '返回root' });
                }
                steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), line: 9, message: 'BST构建完成' });
                return steps;
            }
        },
        {
            id: 'tree-traverse',
            name: '二叉树遍历',
            nameEn: 'Tree Traversal',
            desc: '前序、中序、后序遍历二叉树',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(h)' },
            theory: `
                <div class="theory-section">
                    <h3>前序遍历 (Preorder)</h3>
                    <p><strong>根 → 左 → 右</strong>：先访问根节点，再遍历左子树，最后遍历右子树。</p>
                </div>
                <div class="theory-section">
                    <h3>中序遍历 (Inorder)</h3>
                    <p><strong>左 → 根 → 右</strong>：先遍历左子树，再访问根节点，最后遍历右子树。</p>
                </div>
                <div class="theory-section">
                    <h3>后序遍历 (Postorder)</h3>
                    <p><strong>左 → 右 → 根</strong>：先遍历左子树，再遍历右子树，最后访问根节点。</p>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-comment"># 前序遍历</span></span>',
                '<span class="code-line" data-line="1"><span class="code-keyword">procedure</span> <span class="code-function">Preorder</span>(node)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">if</span> node ≠ <span class="code-keyword">null</span> <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="3">        visit(node)</span>',
                '<span class="code-line" data-line="4">        Preorder(node.left)</span>',
                '<span class="code-line" data-line="5">        Preorder(node.right)</span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7"></span>',
                '<span class="code-line" data-line="8"><span class="code-comment"># 中序遍历</span></span>',
                '<span class="code-line" data-line="9"><span class="code-keyword">procedure</span> <span class="code-function">Inorder</span>(node)</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">if</span> node ≠ <span class="code-keyword">null</span> <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="11">        Inorder(node.left)</span>',
                '<span class="code-line" data-line="12">        visit(node)</span>',
                '<span class="code-line" data-line="13">        Inorder(node.right)</span>',
                '<span class="code-line" data-line="14">    <span class="code-keyword">end if</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">preorder</span>(node):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> node:</span>',
                '<span class="code-line">        <span class="code-function">print</span>(node.val)</span>',
                '<span class="code-line">        preorder(node.left)</span>',
                '<span class="code-line">        preorder(node.right)</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">inorder</span>(node):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> node:</span>',
                '<span class="code-line">        inorder(node.left)</span>',
                '<span class="code-line">        <span class="code-function">print</span>(node.val)</span>',
                '<span class="code-line">        inorder(node.right)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const sortedArr = [...arr].sort((a, b) => a - b);
                function buildTree(values) {
                    if (values.length === 0) return null;
                    const mid = Math.floor(values.length / 2);
                    const node = { val: values[mid], left: null, right: null };
                    node.left = buildTree(values.slice(0, mid));
                    node.right = buildTree(values.slice(mid + 1));
                    return node;
                }
                const tree = buildTree(sortedArr);
                const order = [];
                function preorder(node) {
                    if (!node) return;
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 2, message: `检查节点 ${node.val}` });
                    order.push(node.val);
                    steps.push({ type: 'visit', tree: JSON.parse(JSON.stringify(tree)), current: node.val, order: [...order], line: 3, message: `前序访问: ${node.val} (根→左→右)` });
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 4, message: `遍历左子树: ${node.left ? node.left.val : 'null'}` });
                    preorder(node.left);
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 5, message: `遍历右子树: ${node.right ? node.right.val : 'null'}` });
                    preorder(node.right);
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 6, message: `${node.val} 遍历完成` });
                }
                steps.push({ type: 'start', tree: JSON.parse(JSON.stringify(tree)), line: 1, message: '开始前序遍历: 根 → 左 → 右' });
                preorder(tree);
                steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), order: order, line: 6, message: `遍历顺序: ${order.join(' → ')}` });
                return steps;
            }
        }
    ],
    graph: [
        {
            id: 'bfs',
            name: 'BFS 广度优先',
            nameEn: 'Breadth-First Search',
            desc: '从起点开始，逐层访问图中所有顶点',
            complexity: { best: 'O(V+E)', avg: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>BFS使用队列来遍历图，从起点开始，先访问所有相邻顶点，再依次访问这些顶点的相邻顶点，像波浪一样逐层扩散。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>将起点加入队列</li>
                        <li>从队列取出一个顶点，标记为已访问</li>
                        <li>将该顶点的所有未访问邻居加入队列</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BFS</span>(graph, start)</span>',
                '<span class="code-line" data-line="1">    visited ← empty set</span>',
                '<span class="code-line" data-line="2">    queue ← empty queue</span>',
                '<span class="code-line" data-line="3">    queue.enqueue(start)</span>',
                '<span class="code-line" data-line="4">    <span class="code-keyword">while</span> queue not empty <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="5">        node ← queue.dequeue()</span>',
                '<span class="code-line" data-line="6">        visit(node)</span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">for each</span> neighbor <span class="code-keyword">of</span> node <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="8">            <span class="code-keyword">if</span> neighbor not in visited <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="9">                queue.enqueue(neighbor)</span>',
                '<span class="code-line" data-line="10">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="11">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="12">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="13"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">from</span> collections <span class="code-keyword">import</span> deque</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bfs</span>(graph, start):</span>',
                '<span class="code-line">    visited = <span class="code-function">set</span>()</span>',
                '<span class="code-line">    queue = deque([start])</span>',
                '<span class="code-line">    visited.add(start)</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> queue:</span>',
                '<span class="code-line">        node = queue.popleft()</span>',
                '<span class="code-line">        <span class="code-function">print</span>(node)</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> neighbor <span class="code-keyword">in</span> graph[node]:</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> neighbor <span class="code-keyword">not in</span> visited:</span>',
                '<span class="code-line">                visited.add(neighbor)</span>',
                '<span class="code-line">                queue.append(neighbor)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const graph = {
                    0: [1, 2], 1: [0, 3, 4],
                    2: [0, 4], 3: [1], 4: [1, 2, 5], 5: [4]
                };
                const visited = new Set();
                const queue = [0];
                visited.add(0);
                steps.push({ type: 'start', graph, visited: [...visited], queue: [...queue], line: 0, message: 'BFS开始' });
                steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], line: 1, message: 'visited = ∅' });
                steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], line: 2, message: 'queue = ∅' });
                steps.push({ type: 'enqueue', graph, visited: [...visited], queue: [...queue], neighbor: 0, line: 3, message: 'enqueue(start)' });
                while (queue.length > 0) {
                    steps.push({ type: 'loop-start', graph, visited: [...visited], queue: [...queue], line: 4, message: `while queue not empty: ${queue.join(', ')}` });
                    const node = queue.shift();
                    steps.push({ type: 'visit', graph, visited: [...visited], queue: [...queue], current: node, line: 5, message: `dequeue: ${node}` });
                    steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], current: node, line: 6, message: `visit(${node})` });
                    for (const neighbor of graph[node]) {
                        steps.push({ type: 'loop-start', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 7, message: `检查邻居 ${neighbor}` });
                        if (!visited.has(neighbor)) {
                            steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 8, message: `${neighbor} not in visited` });
                            visited.add(neighbor);
                            queue.push(neighbor);
                            steps.push({ type: 'enqueue', graph, visited: [...visited], queue: [...queue], neighbor, line: 9, message: `enqueue(${neighbor})` });
                        } else {
                            steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 8, message: `${neighbor} already visited` });
                        }
                        steps.push({ type: 'loop-end', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 10, message: 'if结束' });
                    }
                    steps.push({ type: 'loop-end', graph, visited: [...visited], queue: [...queue], current: node, line: 11, message: 'for结束' });
                }
                steps.push({ type: 'loop-end', graph, visited: [...visited], queue: [], line: 12, message: 'while结束' });
                steps.push({ type: 'complete', graph, visited: [...visited], queue: [], line: 13, message: `BFS完成，顺序: ${[...visited]}` });
                return steps;
            }
        },
        {
            id: 'dfs',
            name: 'DFS 深度优先',
            nameEn: 'Depth-First Search',
            desc: '沿着一条路径走到底，然后回溯继续探索',
            complexity: { best: 'O(V+E)', avg: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>DFS像走迷宫一样，沿着一条路径一直走下去，直到走不通再回溯换一条路。它使用栈（或递归）来实现。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从起点开始，标记为已访问</li>
                        <li>选择一个未访问的邻居，深入访问</li>
                        <li>如果没有未访问的邻居，回溯到上一个节点</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">DFS</span>(graph, start, visited)</span>',
                '<span class="code-line" data-line="1">    visited.add(start)</span>',
                '<span class="code-line" data-line="2">    visit(start)</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">for each</span> neighbor <span class="code-keyword">of</span> start <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        <span class="code-keyword">if</span> neighbor not in visited <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">            DFS(graph, neighbor, visited)</span>',
                '<span class="code-line" data-line="6">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="8"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">dfs</span>(graph, start, visited=<span class="code-keyword">None</span>):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> visited <span class="code-keyword">is None</span>:</span>',
                '<span class="code-line">        visited = <span class="code-function">set</span>()</span>',
                '<span class="code-line">    visited.add(start)</span>',
                '<span class="code-line">    <span class="code-function">print</span>(start)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> neighbor <span class="code-keyword">in</span> graph[start]:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> neighbor <span class="code-keyword">not in</span> visited:</span>',
                '<span class="code-line">            dfs(graph, neighbor, visited)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const graph = {
                    0: [1, 2], 1: [0, 3, 4],
                    2: [0, 4], 3: [1], 4: [1, 2, 5], 5: [4]
                };
                const visited = new Set();
                const stack = [0];
                steps.push({ type: 'start', graph, visited: [...visited], stack: [...stack], line: 0, message: 'DFS开始' });
                while (stack.length > 0) {
                    const node = stack.pop();
                    if (!visited.has(node)) {
                        visited.add(node);
                        steps.push({ type: 'visit', graph, visited: [...visited], stack: [...stack], current: node, line: 1, message: `visited.add(${node})` });
                        steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, line: 2, message: `visit(${node})` });
                        const unvisited = graph[node].filter(n => !visited.has(n)).reverse();
                        for (const neighbor of unvisited) {
                            steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 3, message: `检查邻居 ${neighbor}` });
                            if (!visited.has(neighbor)) {
                                steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 4, message: `${neighbor} not in visited` });
                                stack.push(neighbor);
                                steps.push({ type: 'push', graph, visited: [...visited], stack: [...stack], neighbor, line: 5, message: `DFS(${neighbor})` });
                            } else {
                                steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 4, message: `${neighbor} already visited` });
                            }
                            steps.push({ type: 'loop-end', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 6, message: 'if结束' });
                        }
                        steps.push({ type: 'loop-end', graph, visited: [...visited], stack: [...stack], current: node, line: 7, message: 'for结束' });
                    }
                }
                steps.push({ type: 'complete', graph, visited: [...visited], stack: [], line: 8, message: `DFS完成，顺序: ${[...visited]}` });
                return steps;
            }
        }
    ]
};

// ===== 全局状态 =====
let state = {
    currentCategory: 'sorting',
    currentAlgorithm: null,
    array: [],
    steps: [],
    currentStep: 0,
    isPlaying: false,
    speed: 1,
    animationTimer: null
};

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCategoryTabs();
    initContentTabs();
    initVizControls();
    initPseudocodePanel();
    renderAlgorithmList('sorting');
});

// ===== 伪代码面板折叠 =====
function initPseudocodePanel() {
    const panel = document.getElementById('pseudocodePanel');
    const toggle = document.getElementById('pseudocodeToggle');
    if (!panel || !toggle) return;
    
    toggle.addEventListener('click', () => {
        panel.classList.toggle('collapsed');
        toggle.textContent = panel.classList.contains('collapsed') ? '+' : '−';
    });
}

// ===== 主题切换 =====
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    document.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== 分类Tab =====
function initCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.category;
            state.currentCategory = category;
            state.currentAlgorithm = null;
            renderAlgorithmList(category);
            showPlaceholder();
        });
    });
}

// ===== 内容Tab =====
function initContentTabs() {
    document.querySelectorAll('.content-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
        });
    });
}

// ===== 渲染算法列表 =====
function renderAlgorithmList(category) {
    const list = document.getElementById('algorithmList');
    const algos = algorithms[category] || [];
    list.innerHTML = algos.map(algo => 
        '<div class="algorithm-item ' + (state.currentAlgorithm && state.currentAlgorithm.id === algo.id ? 'active' : '') + '" data-id="' + algo.id + '">' +
            '<span class="algorithm-item-icon">📊</span>' +
            '<div class="algorithm-item-info">' +
                '<div class="algorithm-item-name">' + algo.name + '</div>' +
                '<div class="algorithm-item-complexity">' + algo.complexity.avg + '</div>' +
            '</div>' +
        '</div>'
    ).join('');
    
    list.querySelectorAll('.algorithm-item').forEach(item => {
        item.addEventListener('click', () => {
            const algo = algos.find(a => a.id === item.dataset.id);
            if (algo) selectAlgorithm(algo);
        });
    });
}

// ===== 选择算法 =====
function selectAlgorithm(algo) {
    state.currentAlgorithm = algo;
    state.array = generateRandomArray(8);
    state.steps = [];
    state.currentStep = 0;
    state.isPlaying = false;
    if (state.animationTimer) clearInterval(state.animationTimer);
    
    document.querySelectorAll('.algorithm-item').forEach(item => {
        item.classList.toggle('active', item.dataset.id === algo.id);
    });
    
    document.getElementById('currentAlgoName').textContent = algo.name + ' (' + algo.nameEn + ')';
    document.getElementById('currentAlgoDesc').textContent = algo.desc;
    
    document.getElementById('complexityBadges').innerHTML = 
        '<div class="complexity-badge best"><span class="label">最佳</span>' + algo.complexity.best + '</div>' +
        '<div class="complexity-badge avg"><span class="label">平均</span>' + algo.complexity.avg + '</div>' +
        '<div class="complexity-badge worst"><span class="label">最差</span>' + algo.complexity.worst + '</div>' +
        '<div class="complexity-badge space"><span class="label">空间</span>' + algo.complexity.space + '</div>';
    
    document.getElementById('theoryContent').innerHTML = algo.theory;
    
    // 渲染伪代码（支持数组格式）
    let pseudoHtml = '';
    if (Array.isArray(algo.pseudocode)) {
        pseudoHtml = algo.pseudocode.join('\n');
    } else {
        pseudoHtml = algo.pseudocode;
    }
    document.getElementById('pseudocodeBlock').innerHTML = '<code>' + pseudoHtml + '</code>';
    
    // 渲染Python代码
    let pythonHtml = '';
    if (Array.isArray(algo.python)) {
        pythonHtml = algo.python.join('\n');
    } else {
        pythonHtml = algo.python;
    }
    document.getElementById('pythonCode').innerHTML = '<code>' + pythonHtml + '</code>';
    
    document.querySelector('.content-tab[data-tab="theory"]').click();
    updateStepInfo();
    renderVisualization();
}

// ===== 生成随机数组 =====
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 80) + 20);
}

// ===== 伪代码高亮 =====
function highlightPseudocode() {
    const codeBlock = document.getElementById('pseudocodeBlock');
    if (!codeBlock || !state.currentAlgorithm) return;
    
    // 清除所有高亮
    codeBlock.querySelectorAll('.code-line').forEach(line => {
        line.classList.remove('highlight', 'highlight-compare', 'highlight-swap', 'highlight-loop');
    });
    
    // 获取当前步骤
    if (state.steps.length === 0 || state.currentStep >= state.steps.length) return;
    
    const step = state.steps[state.currentStep];
    if (step.line === undefined && step.line === null) return;
    
    // 高亮对应行
    const targetLine = step.line;
    codeBlock.querySelectorAll('.code-line').forEach(line => {
        const lineNum = parseInt(line.getAttribute('data-line'));
        if (lineNum === targetLine) {
            line.classList.add('highlight');
            // 根据步骤类型添加额外样式
            if (step.type === 'compare' || step.type === 'check') {
                line.classList.add('highlight-compare');
            } else if (step.type === 'swap' || step.type === 'swap-start') {
                line.classList.add('highlight-swap');
            } else if (step.type === 'loop-start' || step.type === 'loop-end') {
                line.classList.add('highlight-loop');
            }
        }
    });
    
    // 滚动到高亮行
    const highlightedLine = codeBlock.querySelector('.code-line.highlight');
    if (highlightedLine) {
        highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ===== 可视化控制 =====
function initVizControls() {
    document.getElementById('btnStart').addEventListener('click', togglePlay);
    document.getElementById('btnStep').addEventListener('click', stepForward);
    document.getElementById('btnReset').addEventListener('click', resetAnimation);
    document.getElementById('btnRandom').addEventListener('click', randomize);
    document.getElementById('btnApply').addEventListener('click', applyCustomInput);
    document.getElementById('speedSlider').addEventListener('input', updateSpeed);
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
        if (e.code === 'ArrowRight') stepForward();
        if (e.code === 'ArrowLeft') stepBackward();
        if (e.code === 'KeyR') resetAnimation();
    });
}

function togglePlay() {
    if (!state.currentAlgorithm) return;
    if (state.steps.length === 0) generateSteps();
    
    state.isPlaying = !state.isPlaying;
    const btn = document.getElementById('btnStart');
    
    if (state.isPlaying) {
        btn.innerHTML = '<span>⏸</span> 暂停';
        btn.classList.add('primary');
        playAnimation();
    } else {
        btn.innerHTML = '<span>▶</span> 开始';
        btn.classList.remove('primary');
        if (state.animationTimer) clearInterval(state.animationTimer);
    }
}

function playAnimation() {
    if (state.animationTimer) clearInterval(state.animationTimer);
    const interval = 1000 / state.speed;
    state.animationTimer = setInterval(() => {
        if (state.currentStep < state.steps.length - 1) {
            state.currentStep++;
            renderVisualization();
            updateStepInfo();
            highlightPseudocode();
        } else {
            togglePlay();
        }
    }, interval);
}

function stepForward() {
    if (!state.currentAlgorithm) return;
    if (state.steps.length === 0) generateSteps();
    if (state.currentStep < state.steps.length - 1) {
        state.currentStep++;
        renderVisualization();
        updateStepInfo();
        highlightPseudocode();
    }
}

function stepBackward() {
    if (!state.currentAlgorithm || state.steps.length === 0) return;
    if (state.currentStep > 0) {
        state.currentStep--;
        renderVisualization();
        updateStepInfo();
        highlightPseudocode();
    }
}

function resetAnimation() {
    state.currentStep = 0;
    state.isPlaying = false;
    if (state.animationTimer) clearInterval(state.animationTimer);
    const btn = document.getElementById('btnStart');
    btn.innerHTML = '<span>▶</span> 开始';
    btn.classList.remove('primary');
    renderVisualization();
    updateStepInfo();
    highlightPseudocode();
}

function randomize() {
    if (!state.currentAlgorithm) return;
    state.array = generateRandomArray(8);
    state.steps = [];
    state.currentStep = 0;
    state.isPlaying = false;
    if (state.animationTimer) clearInterval(state.animationTimer);
    const btn = document.getElementById('btnStart');
    btn.innerHTML = '<span>▶</span> 开始';
    btn.classList.remove('primary');
    renderVisualization();
    updateStepInfo();
    highlightPseudocode();
}

function applyCustomInput() {
    if (!state.currentAlgorithm) return;
    const input = document.getElementById('customInput').value;
    const nums = input.split(/[,\s]+/).map(s => parseInt(s)).filter(n => !isNaN(n) && n > 0 && n <= 100);
    if (nums.length > 0 && nums.length <= 12) {
        state.array = nums;
        state.steps = [];
        state.currentStep = 0;
        state.isPlaying = false;
        if (state.animationTimer) clearInterval(state.animationTimer);
        const btn = document.getElementById('btnStart');
        btn.innerHTML = '<span>▶</span> 开始';
        btn.classList.remove('primary');
        renderVisualization();
        updateStepInfo();
        highlightPseudocode();
    }
}

function updateSpeed() {
    state.speed = parseFloat(document.getElementById('speedSlider').value);
    document.getElementById('speedValue').textContent = state.speed + 'x';
    if (state.isPlaying) playAnimation();
}

function updateStepInfo() {
    const info = document.getElementById('stepInfo');
    const progress = document.getElementById('progressFill');
    if (state.steps.length > 0) {
        info.innerHTML = '步骤: <span>' + (state.currentStep + 1) + '</span> / ' + state.steps.length;
        progress.style.width = ((state.currentStep + 1) / state.steps.length * 100) + '%';
        const step = state.steps[state.currentStep];
        document.querySelector('.step-text').textContent = step.message || '执行中...';
    } else {
        info.innerHTML = '步骤: <span>0</span> / 0';
        progress.style.width = '0%';
        document.querySelector('.step-text').textContent = '--';
    }
}

function generateSteps() {
    if (!state.currentAlgorithm) return;
    const algo = state.currentAlgorithm;
    if (algo.generateSteps) {
        state.steps = algo.generateSteps(state.array);
        state.currentStep = 0;
    }
}

// ===== 渲染可视化 =====
function renderVisualization() {
    const canvas = document.getElementById('vizCanvas');
    if (!state.currentAlgorithm) {
        canvas.innerHTML = '<div class="placeholder-message"><div class="placeholder-icon">🎬</div><p>选择一个算法开始可视化演示</p></div>';
        return;
    }
    
    if (state.steps.length === 0) {
        renderArrayVisualization(state.array);
    } else {
        const step = state.steps[state.currentStep];
        renderStepVisualization(step);
    }
}

function renderStepVisualization(step) {
    const algo = state.currentAlgorithm;
    if (algo.id && algo.id.startsWith('ll-')) {
        renderLinkedListVisualization(step);
    } else if (algo.id && (algo.id.includes('tree') || algo.id.includes('bst'))) {
        renderTreeVisualization(step);
    } else if (algo.id && algo.id.includes('bfs') || algo.id.includes('dfs')) {
        renderGraphVisualization(step);
    } else {
        renderArrayVisualizationWithStep(step);
    }
}

function renderArrayVisualization(arr) {
    const canvas = document.getElementById('vizCanvas');
    const max = Math.max(...arr);
    const container = document.createElement('div');
    container.className = 'array-container';
    
    arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        const height = Math.max(30, (val / max) * 200);
        bar.innerHTML = '<div class="array-bar-value">' + val + '</div>' +
            '<div class="array-bar-inner" style="height: ' + height + 'px"></div>' +
            '<div class="array-bar-index">[' + idx + ']</div>';
        container.appendChild(bar);
    });
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderArrayVisualizationWithStep(step) {
    const canvas = document.getElementById('vizCanvas');
    const arr = step.array;
    const max = Math.max(...arr);
    const container = document.createElement('div');
    container.className = 'array-container';
    
    arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        
        if (step.type === 'compare' && step.indices && step.indices.includes(idx)) {
            bar.classList.add('comparing');
        } else if (step.type === 'swap' && step.indices && step.indices.includes(idx)) {
            bar.classList.add('swapping');
        } else if (step.type === 'pivot' && step.index === idx) {
            bar.classList.add('pivot');
        } else if (step.type === 'found' && step.index === idx) {
            bar.classList.add('found');
        } else if (step.type === 'check' && step.index === idx) {
            bar.classList.add('current');
        } else if (step.type === 'sorted' && step.index <= idx) {
            bar.classList.add('sorted');
        } else if (step.type === 'complete') {
            bar.classList.add('sorted');
        }
        
        const height = Math.max(30, (val / max) * 200);
        bar.innerHTML = '<div class="array-bar-value">' + val + '</div>' +
            '<div class="array-bar-inner" style="height: ' + height + 'px"></div>' +
            '<div class="array-bar-index">[' + idx + ']</div>';
        container.appendChild(bar);
    });
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderLinkedListVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const container = document.createElement('div');
    container.className = 'linked-list-container';
    
    const list = step.list || [];
    list.forEach((item, idx) => {
        const data = typeof item === 'object' ? item.data : item;
        const nodeEl = document.createElement('div');
        nodeEl.className = 'll-node';
        if (step.type === 'insert' && idx === 0) nodeEl.classList.add('inserting');
        nodeEl.innerHTML = '<div class="ll-node-box"><div class="ll-node-data">' + data + '</div><div class="ll-node-pointer">next</div></div>';
        container.appendChild(nodeEl);
        
        if (idx < list.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'll-arrow';
            container.appendChild(arrow);
        }
    });
    
    const nullEl = document.createElement('div');
    nullEl.className = 'll-null';
    nullEl.textContent = 'NULL';
    container.appendChild(nullEl);
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderTreeVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const tree = step.tree;
    if (!tree) {
        canvas.innerHTML = '';
        canvas.appendChild(container);
        return;
    }
    
    const positions = [];
    const levelWidth = 80;
    const levelHeight = 70;
    
    function placeNodes(node, level, left, right) {
        if (!node) return;
        const x = (left + right) / 2;
        const y = level * levelHeight + 30;
        positions.push({ x, y, val: node.val, level });
        if (node.left) placeNodes(node.left, level + 1, left, x);
        if (node.right) placeNodes(node.right, level + 1, x, right);
    }
    
    placeNodes(tree, 0, 0, 500);
    
    function drawEdges(node, left, right) {
        if (!node) return;
        const x = (left + right) / 2;
        const y = positions.find(p => p.val === node.val).y;
        
        if (node.left) {
            const childPos = positions.find(p => p.val === node.left.val);
            if (childPos) {
                const edge = document.createElement('div');
                edge.className = 'tree-edge';
                const dx = childPos.x - x;
                const dy = childPos.y - y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                edge.style.width = length + 'px';
                edge.style.left = (x + 22) + 'px';
                edge.style.top = (y + 22) + 'px';
                edge.style.transform = 'rotate(' + angle + 'deg)';
                container.appendChild(edge);
            }
            drawEdges(node.left, left, x);
        }
        if (node.right) {
            const childPos = positions.find(p => p.val === node.right.val);
            if (childPos) {
                const edge = document.createElement('div');
                edge.className = 'tree-edge';
                const dx = childPos.x - x;
                const dy = childPos.y - y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                edge.style.width = length + 'px';
                edge.style.left = (x + 22) + 'px';
                edge.style.top = (y + 22) + 'px';
                edge.style.transform = 'rotate(' + angle + 'deg)';
                container.appendChild(edge);
            }
            drawEdges(node.right, x, right);
        }
    }
    
    drawEdges(tree, 0, 500);
    
    positions.forEach(pos => {
        const node = document.createElement('div');
        node.className = 'tree-node';
        if (step.type === 'visit' && step.current === pos.val) {
            node.classList.add('current');
        }
        node.style.left = pos.x + 'px';
        node.style.top = pos.y + 'px';
        node.textContent = pos.val;
        container.appendChild(node);
    });
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderGraphVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const container = document.createElement('div');
    container.className = 'graph-container';
    
    const nodePositions = {
        0: { x: 60, y: 40 }, 1: { x: 180, y: 30 },
        2: { x: 60, y: 150 }, 3: { x: 300, y: 30 },
        4: { x: 180, y: 150 }, 5: { x: 300, y: 150 }
    };
    
    const graph = step.graph || {};
    const edges = new Set();
    Object.keys(graph).forEach(node => {
        graph[node].forEach(neighbor => {
            const key = Math.min(node, neighbor) + '-' + Math.max(node, neighbor);
            if (!edges.has(key)) {
                edges.add(key);
                const pos1 = nodePositions[node];
                const pos2 = nodePositions[neighbor];
                const edge = document.createElement('div');
                edge.className = 'graph-edge';
                const dx = pos2.x - pos1.x;
                const dy = pos2.y - pos1.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                edge.style.width = length + 'px';
                edge.style.left = (pos1.x + 24) + 'px';
                edge.style.top = (pos1.y + 24) + 'px';
                edge.style.transform = 'rotate(' + angle + 'deg)';
                container.appendChild(edge);
            }
        });
    });
    
    Object.keys(nodePositions).forEach(node => {
        const pos = nodePositions[node];
        const nodeEl = document.createElement('div');
        nodeEl.className = 'graph-node';
        if (step.visited && step.visited.includes(parseInt(node))) {
            nodeEl.classList.add('visited');
        }
        if (step.current === parseInt(node)) {
            nodeEl.classList.add('current');
        }
        nodeEl.style.left = pos.x + 'px';
        nodeEl.style.top = pos.y + 'px';
        nodeEl.textContent = node;
        container.appendChild(nodeEl);
    });
    
    if (step.queue || step.stack) {
        const list = step.queue || step.stack;
        const label = step.queue ? '队列' : '栈';
        const queueDisplay = document.createElement('div');
        queueDisplay.style.cssText = 'position:absolute;top:10px;right:10px;background:var(--bg-elevated);padding:0.75rem;border-radius:8px;font-size:0.8rem;';
        queueDisplay.innerHTML = '<strong>' + label + ':</strong> [' + list.join(', ') + ']';
        container.appendChild(queueDisplay);
    }
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function showPlaceholder() {
    document.getElementById('currentAlgoName').textContent = '选择一个算法开始学习';
    document.getElementById('currentAlgoDesc').textContent = '从左侧列表选择一个算法，查看详细讲解和动画演示';
    document.getElementById('complexityBadges').innerHTML = '';
    document.getElementById('theoryContent').innerHTML = '<div class="placeholder-message"><div class="placeholder-icon">📚</div><p>请选择一个算法查看详细原理讲解</p></div>';
    document.getElementById('pseudocodeBlock').innerHTML = '<code>请选择一个算法</code>';
    document.getElementById('pythonCode').innerHTML = '<code>请选择一个算法</code>';
    // 只替换 vizCanvas 中的占位符消息，保留伪代码面板
    const vizCanvas = document.getElementById('vizCanvas');
    const placeholder = vizCanvas.querySelector('.placeholder-message');
    if (placeholder) {
        placeholder.innerHTML = '<div class="placeholder-icon">🎬</div><p>选择一个算法开始可视化演示</p>';
    }
    document.getElementById('stepInfo').innerHTML = '步骤: <span>0</span> / 0';
    document.getElementById('progressFill').style.width = '0%';
    document.querySelector('.step-text').textContent = '--';
}

function copyCode(elementId) {
    const code = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '已复制!';
        setTimeout(() => btn.textContent = '复制代码', 2000);
    });
}
